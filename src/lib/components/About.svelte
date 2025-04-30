<script lang="ts">
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/your-profile',
            icon: 'linkedin'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/your-username',
            icon: 'github'
        },
        {
            name: 'Portfolio',
            url: 'https://your-portfolio.com',
            icon: 'globe'
        }
    ];
</script>

<div class="nes-container is-dark with-title">
    <p class="title">About Me</p>
    <div class="flex flex-col items-center gap-8">
        <div class="avatar-container">
            <div class="nes-avatar is-large">
                <img src="https://via.placeholder.com/128" alt="Profile Avatar" />
            </div>
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
    .avatar-container {
        position: relative;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid var(--primary-color);
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
        animation: pulse 2s infinite;
    }

    .avatar-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

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

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
</style> 