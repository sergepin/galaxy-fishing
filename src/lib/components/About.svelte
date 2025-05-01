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

<div class="nes-container is-dark with-title bg-gradient-to-br from-blue-900 via-black to-indigo-900">
    <p class="title">About Me</p>
    <div class="flex flex-col items-center gap-8">

        <div class="flex justify-center">
            <img 
                class="w-32 aspect-square rounded-full object-cover border-4 border-yellow-400 hover:scale-105 transition-transform duration-300 shadow-[0_0_0_4px_rgba(255,255,0,0.4)]" 
                style="object-position: 50% 30%;" 
                src="/avatar.jpg" 
                alt="Profile Avatar" 
            />
        </div>

        <div class="text-center max-w-2xl">
            <p class="text-lg mb-4 font-medium text-gray-100 leading-relaxed">
                Welcome to Galaxy Fishing! I'm a passionate developer who loves creating fun and engaging web experiences. 
                This project combines my love for retro gaming aesthetics with modern web technologies.
            </p>
            <p class="text-sm nes-text is-warning italic pt-4 border-t border-dotted border-yellow-400 mt-4">
                Built with Svelte, Tailwind CSS, and NES.css
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-6">
            {#each socialLinks as link}
                <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="nes-btn is-warning social-link"
                >
                    <span class="icon-wrapper">
                        <i class={`nes-icon ${link.icon}`}></i>
                    </span>
                    <span class="font-semibold">{link.name}</span>
                </a>
            {/each}
        </div>
    </div>
</div>


