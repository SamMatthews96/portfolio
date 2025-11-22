<script setup lang="ts">
import LinkedInIcon from '../assets/LinkedInIcon.vue';
import GitHubIcon from '../assets/GitHubIcon.vue';
import DownloadIcon from '../assets/DownloadIcon.vue';

const linkedinUrl = 'https://www.linkedin.com/in/samdwmatthews/';
const githubUrl = 'https://github.com/SamMatthews96';
const cvUrl = '/cv.pdf';
</script>

<template>
    <h2>Links</h2>
  <div class="links-container">
    <a 
      :href="linkedinUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="link-icon"
      aria-label="LinkedIn Profile"
      data-tooltip="LinkedIn"
    >
      <LinkedInIcon />
    </a>
    <a 
      :href="githubUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="link-icon"
      aria-label="GitHub Profile"
      data-tooltip="GitHub"
    >
      <GitHubIcon />
    </a>
    <a 
      :href="cvUrl" 
      download
      class="link-icon"
      aria-label="Download CV"
      data-tooltip="Download CV"
    >
      <DownloadIcon />
    </a>
  </div>
</template>

<style scoped lang="scss">
.links-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;
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
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
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
    margin-bottom: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-2px);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 1000;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>