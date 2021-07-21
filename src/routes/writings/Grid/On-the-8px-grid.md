# Take on the 8px Grid systems (the hard grid method)

Articles about it:

- [The Comprehensive 8pt Grid Guide](https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179)
- [Text Baseline](https://alistapart.com/article/settingtypeontheweb/)
- [From Google DS](https://www.designsystems.com/space-grids-and-layouts/)
- [Hard vs Soft Grid method](https://medium.com/sketch-app-sources/hard-and-soft-8-point-grids-60cf803b9de4)

## Reminder of the 8px system "method"

Why 8px grid?

- Pixel perfect
- It scales perfectly in all the different screen displays (including android’s @0.75 and @1.5).
- Grid rhythm
- Google and Apple say so (Seems to be a best practice already in place)
- Simple multiple easily divisible and scalable
- ... ?

With the soft grid method, we are not really getting the mathematical grid rhythm that it implies (rhythmic grid from the Print world)

## What's stop us from having implementing a Hard grid

- Uncontrollable Font baseline
- None divisible by 8 spacings in between elements
- Lack of control of every components
- Image heights
- Responsiveness

---

## What I'm experimenting with to simplify Hard grid implementation

I'm going to cover how I'm designing build around to handle these issues.

tldr; I'm isolating each elements into their own 8px heigt elements (yes, fonts as well) - so individual every components IS a multiple of 8

- [Dealing with the font](#encapsulate-font-as-components-divisible-by-8)
- [Dealing with the components](#control-each-component-as-a-component-disibile-by-8)
- [Dealing with the images](#image-heights)
- [Dealing with the responsive](#responsiveness)

### Encapsulate font as components divisible by 8

- Check individual font baseline, within their box-sizing
- Adjust the paddings
- Make sure to have a line-height / 8
- Set it up once and for all

### Control each component as a component disibile by 8

- If the font is set up as an independant and / 8 element, 90% of the work is already done
- You only want to use 8px grid Spacers to manage spacings and rhythm in between components
- You only want to adjust with weird paddings within containers, so they standalone are 8px components elements

### Image heights

- Imposing a height divisible by 8 for any images
- We kinda forces this for images width, I don't see any problem with masking images' height
- Working on a automating it

### Responsiveness

- Grid systems
- Mobile grid and all
