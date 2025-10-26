console.log('[ResizableSidebar] Module loaded');

let isResizing = false;
let startX = 0;
let startWidth = 0;
const minWidth = 200;
const maxWidth = 500;

// Global event handlers (only set up once)
function handleMouseMove(e) {
  if (!isResizing) return;

  const sidebar = document.querySelector('.theme-doc-sidebar-container');
  if (!sidebar) return;

  const diff = e.clientX - startX;
  let newWidth = startWidth + diff;

  // Constrain width
  newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

  sidebar.style.width = `${newWidth}px`;
}

function handleMouseUp() {
  if (isResizing) {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    const resizeHandle = document.querySelector('.sidebar-resize-handle');

    isResizing = false;
    if (resizeHandle) {
      resizeHandle.classList.remove('resizing');
    }
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    // Save width to localStorage
    if (sidebar) {
      localStorage.setItem('sidebarWidth', sidebar.style.width);
      console.log('[ResizableSidebar] Saved width:', sidebar.style.width);
    }
  }
}

// Set up global listeners only once
if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

// Wait for the DOM to be ready
function initResizableSidebar() {
  const sidebar = document.querySelector('.theme-doc-sidebar-container');
  if (!sidebar) {
    console.log('[ResizableSidebar] Sidebar container not found');
    return false;
  }

  // Check if handle already exists
  if (sidebar.querySelector('.sidebar-resize-handle')) {
    console.log('[ResizableSidebar] Handle already exists');
    return true;
  }

  // Create resize handle
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'sidebar-resize-handle';
  resizeHandle.title = 'Drag to resize sidebar (double-click to reset)';
  sidebar.appendChild(resizeHandle);
  console.log('[ResizableSidebar] Resize handle added successfully');

  // Load saved width from localStorage
  const savedWidth = localStorage.getItem('sidebarWidth');
  if (savedWidth) {
    sidebar.style.width = savedWidth;
    console.log('[ResizableSidebar] Loaded saved width:', savedWidth);
  }

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = sidebar.offsetWidth;
    resizeHandle.classList.add('resizing');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
    console.log('[ResizableSidebar] Started resizing');
  });

  // Double-click to reset to default width
  resizeHandle.addEventListener('dblclick', () => {
    sidebar.style.width = '';
    localStorage.removeItem('sidebarWidth');
    console.log('[ResizableSidebar] Reset to default width');
  });

  return true;
}

// Try multiple initialization methods
function tryInit() {
  console.log('[ResizableSidebar] Attempting initialization...');

  const success = initResizableSidebar();

  // If failed, retry after a short delay
  if (!success) {
    setTimeout(tryInit, 100);
  }
}

// Initialize immediately if DOM is ready
if (typeof document !== 'undefined') {
  // Try immediately
  setTimeout(tryInit, 0);

  // Try on DOM ready states
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInit);
  }

  // Try on load
  window.addEventListener('load', () => setTimeout(tryInit, 100));

  // Watch for sidebar appearance using MutationObserver
  const observer = new MutationObserver(() => {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (sidebar && !sidebar.querySelector('.sidebar-resize-handle')) {
      tryInit();
    }
  });

  // Start observing as soon as possible
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    setTimeout(() => {
      if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
      }
    }, 0);
  }
}

export default function ResizableSidebar() {
  return null;
}
