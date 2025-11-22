<script setup lang="ts">
import LinkedInIcon from '../assets/LinkedInIcon.vue';
import GitHubIcon from '../assets/GitHubIcon.vue';
import DownloadIcon from '../assets/DownloadIcon.vue';

const linkedinUrl = 'https://www.linkedin.com/in/samdwmatthews/';
const githubUrl = 'https://github.com/SamMatthews96';
const cvUrl = '/portfolio/cv.pdf';
</script>

<template>
    <div class="links-container">
        <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="LinkedIn Profile"
            data-tooltip="LinkedIn">
            <LinkedInIcon />
        </a>
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="GitHub Profile"
            data-tooltip="GitHub">
            <GitHubIcon />
        </a>
        <a :href="cvUrl" download class="link-icon" aria-label="Download CV" data-tooltip="Download CV">
            <DownloadIcon />
        </a>
    </div>
</template>

<style scoped lang="scss">
.links-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
}

.link-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--font-color);
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
    cursor: pointer;
    position: relative;

    svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.1);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }

    // Tooltip styles
    &::before {
        content: attr(data-tooltip);
        position: absolute;
        top: 0;
        right: 100%;
        transform: translateX(-8px) translateY(0);
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 0.875rem;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 1000;
        margin-right: 8px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateX(0) translateY(-50%);
        border: 5px solid transparent;
        border-left-color: rgba(0, 0, 0, 0.9);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 1000;
    }

    &:hover::before,
    &:hover::after {
        opacity: 1;
        transform: translateX(-8px) translateY(0);
    }

    &:hover::after {
        transform: translateX(0) translateY(-50%);
    }
}
</style>