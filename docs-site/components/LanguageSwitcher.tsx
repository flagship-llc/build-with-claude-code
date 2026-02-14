'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  const jaUrl = isEnglish ? pathname.replace(/^\/en/, '') || '/' : pathname
  const enUrl = isEnglish ? pathname : `/en${pathname}`

  useEffect(() => {
    const id = 'lang-switcher'

    const createDropdown = (footer: Element) => {
      // Remove existing if any
      const existing = document.getElementById(id)
      if (existing) {
        existing.remove()
      }

      const container = document.createElement('div')
      container.id = id
      container.style.cssText = 'position:relative;'

      const button = document.createElement('button')
      button.type = 'button'
      button.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: currentColor;
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px 0;
        transition: opacity 0.2s;
        opacity: 0.6;
      `.replace(/\s+/g, ' ')
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>${isEnglish ? 'English' : '日本語'}</span>
      `
      button.onmouseenter = () => { button.style.opacity = '1' }
      button.onmouseleave = () => { if (!dropdown.matches(':hover')) button.style.opacity = '0.6' }

      const dropdown = document.createElement('div')
      dropdown.style.cssText = `
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        background: var(--nextra-bg);
        border: 1px solid hsl(var(--nextra-border) / 0.5);
        border-radius: 8px;
        padding: 6px;
        min-width: 140px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1), 0 4px 8px -4px rgba(0,0,0,0.06);
        z-index: 50;
      `.replace(/\s+/g, ' ')

      const createOption = (label: string, href: string, isActive: boolean) => {
        const option = document.createElement('a')
        option.href = href
        option.style.cssText = `
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          font-size: 14px;
          color: currentColor;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.15s;
          opacity: ${isActive ? '1' : '0.5'};
          ${isActive ? 'font-weight: 500;' : ''}
        `.replace(/\s+/g, ' ')

        const checkmark = isActive ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : '<span style="width:14px"></span>'
        option.innerHTML = `${checkmark}<span>${label}</span>`

        option.onmouseenter = () => {
          option.style.background = 'hsl(var(--nextra-primary-hue) var(--nextra-primary-saturation) 50% / 0.1)'
          option.style.opacity = '1'
        }
        option.onmouseleave = () => {
          option.style.background = 'transparent'
          option.style.opacity = isActive ? '1' : '0.5'
        }
        return option
      }

      dropdown.appendChild(createOption('日本語', jaUrl, !isEnglish))
      dropdown.appendChild(createOption('English', enUrl, isEnglish))

      container.appendChild(button)
      container.appendChild(dropdown)

      container.onmouseenter = () => {
        dropdown.style.opacity = '1'
        dropdown.style.visibility = 'visible'
        dropdown.style.transform = 'translateX(-50%) translateY(0)'
        button.style.opacity = '1'
      }
      container.onmouseleave = () => {
        dropdown.style.opacity = '0'
        dropdown.style.visibility = 'hidden'
        dropdown.style.transform = 'translateX(-50%) translateY(4px)'
        button.style.opacity = '0.6'
      }

      footer.prepend(container)
    }

    // Find desktop sidebar footer (not hidden on md+)
    const findAndCreate = () => {
      const footers = document.querySelectorAll('.nextra-sidebar-footer')
      for (const footer of footers) {
        // Check if this footer is visible (not in mobile nav)
        const sidebar = footer.closest('.nextra-sidebar')
        if (sidebar) {
          createDropdown(footer)
          return true
        }
      }
      return false
    }

    // Try immediately
    if (findAndCreate()) {
      return () => {
        document.getElementById(id)?.remove()
      }
    }

    // Use MutationObserver to wait for sidebar
    const observer = new MutationObserver(() => {
      if (findAndCreate()) {
        observer.disconnect()
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      document.getElementById(id)?.remove()
    }
  }, [pathname, isEnglish, jaUrl, enUrl])

  return null
}
