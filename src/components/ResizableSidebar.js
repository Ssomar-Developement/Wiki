import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Wait for the DOM to be ready
  function initResizableSidebar() {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebar) {
      console.log('[ResizableSidebar] Sidebar container not found');
      return;
    }

    // Check if handle already exists
    if (sidebar.querySelector('.sidebar-resize-handle')) {
      console.log('[ResizableSidebar] Handle already exists');
      return;
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

    let isResizing = false;
    let startX = 0;
    let startWidth = 0;

    const minWidth = 200;
    const maxWidth = 500;

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

    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;

      const diff = e.clientX - startX;
      let newWidth = startWidth + diff;

      // Constrain width
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

      sidebar.style.width = `${newWidth}px`;
    });

    document.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        resizeHandle.classList.remove('resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';

        // Save width to localStorage
        localStorage.setItem('sidebarWidth', sidebar.style.width);
        console.log('[ResizableSidebar] Saved width:', sidebar.style.width);
      }
    });

    // Double-click to reset to default width
    resizeHandle.addEventListener('dblclick', () => {
      sidebar.style.width = '';
      localStorage.removeItem('sidebarWidth');
      console.log('[ResizableSidebar] Reset to default width');
    });
  }

  // Try multiple initialization methods
  function tryInit() {
    console.log('[ResizableSidebar] Attempting initialization...');
    initResizableSidebar();
  }

  // Initialize immediately if DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(tryInit, 100);
  }

  // Initialize on load
  window.addEventListener('load', tryInit);

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', tryInit);

  // Re-initialize on route change (for SPA navigation)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(tryInit, 200);
    }
  }).observe(document.body, { childList: true, subtree: true });
}

export default function ResizableSidebar() {
  return null;
}
