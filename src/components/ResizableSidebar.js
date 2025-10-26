import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Wait for the DOM to be ready
  function initResizableSidebar() {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebar) return;

    // Check if handle already exists
    if (sidebar.querySelector('.sidebar-resize-handle')) return;

    // Create resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'sidebar-resize-handle';
    sidebar.appendChild(resizeHandle);

    // Load saved width from localStorage
    const savedWidth = localStorage.getItem('sidebarWidth');
    if (savedWidth) {
      sidebar.style.width = savedWidth;
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
      }
    });

    // Double-click to reset to default width
    resizeHandle.addEventListener('dblclick', () => {
      sidebar.style.width = '';
      localStorage.removeItem('sidebarWidth');
    });
  }

  // Initialize on load
  window.addEventListener('load', initResizableSidebar);

  // Re-initialize on route change (for SPA navigation)
  if (window.docusaurus) {
    window.addEventListener('docusaurus.navigate', () => {
      setTimeout(initResizableSidebar, 100);
    });
  }
}

export default function ResizableSidebar() {
  return null;
}
