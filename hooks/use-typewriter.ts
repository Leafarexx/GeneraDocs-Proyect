"use client"

import { useState, useEffect, useCallback } from "react"

interface UseTypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypewriter({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const currentPhrase = phrases[phraseIndex]

  const tick = useCallback(() => {
    if (isWaiting) return

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
      } else {
        // Finished typing, wait before deleting
        setIsWaiting(true)
        setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1))
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }
  }, [displayText, isDeleting, isWaiting, currentPhrase, pauseDuration, phrases.length])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return { displayText, isTyping: !isWaiting }
}
