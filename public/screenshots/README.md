# Screenshots Directory

This directory contains demo screenshots and images for the Ayana Izumi website.

## Required Images

Add the following screenshots to showcase Ayana's capabilities:

1. **chat-demo.jpg** - WhatsApp conversation showing Ayana's chat responses
2. **voice-demo.jpg** - Screenshot of voice messages from Ayana
3. **image-demo.jpg** - AI-generated images created by Ayana
4. **music-demo.jpg** - Screenshot showing Ayana's singing/music features

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1200x675 pixels (16:9 aspect ratio)
- **Quality**: High quality but optimized for web
- **Content**: Real WhatsApp screenshots or mockups showing Ayana in action

## Usage

Once you add real screenshots:

1. Update the `src/components/Gallery.tsx` file
2. Uncomment the `Image` component imports and usage
3. Remove the placeholder divs
4. Update alt text descriptions for accessibility

## Audio Integration

The Voice and Music demo cards now include interactive features:
- **Hover Play Button**: Appears when hovering over voice/music cards
- **Audio Samples**: Add audio files to `/public/audio/` directory
- **Interactive Playback**: Users can play/pause audio samples with visual feedback

The Gallery component is already set up to display these images beautifully with hover effects, responsive design, and audio playback for voice/music demos.
