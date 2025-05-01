<script>
  import "../app.css";
  import { browser } from '$app/environment';
  let { children } = $props();

  if (browser && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('✅ Service Worker registrado:', reg.scope))
        .catch(err => console.error('❌ Error al registrar Service Worker:', err));
    });
  }
</script>

{@render children()}
