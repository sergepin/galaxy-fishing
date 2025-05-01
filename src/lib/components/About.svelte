<script lang="ts">
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/sergepind',
            icon: 'linkedin'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/sergepin',
            icon: 'github'
        },
        {
            name: 'Portfolio',
            url: 'https://sergiopinzon.dev',
            icon: 'snes-jp-logo'
        }
    ];
</script>

<div class="nes-container is-dark with-title">
    <p class="title">About Me</p>
    <div class="flex flex-col items-center gap-8">
        <div class="flex justify-center">
            <img 
                class="w-32 h-32 rounded-full object-cover object-center border-4 border-primary shadow-lg overflow-hidden" 
                style="aspect-ratio: 1; object-position: 50% 30%;"
                src="/avatar.jpg" 
                alt="Profile Avatar" 
            />
        </div>
        
        <div class="text-center max-w-2xl">
            <p class="text-lg mb-4">
                Welcome to Galaxy Fishing! I'm a passionate developer who loves creating fun and engaging web experiences. 
                This project combines my love for retro gaming aesthetics with modern web technologies.
            </p>
            <p class="text-sm nes-text is-warning">
                Built with Svelte, Tailwind CSS, and NES.css
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            {#each socialLinks as link}
                <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="nes-btn is-primary social-link"
                >
                    <i class={`nes-icon ${link.icon} is-small`}></i>
                    <span>{link.name}</span>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease;
    }

    .social-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .social-link i {
        margin-right: 0.25rem;
    }
</style> 