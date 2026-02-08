// ================= PRODUCT DATA (14 Items) =================
const products = {
  // --- PRODUCT 1 ---
  1: {
    name: "KEKE DRESS",
    description: "An ethereal, cloud-like white ensemble designed for clarity, peace, and the woman who commands the room with a serene, luminous presence.",
    story: `<strong>THE KEKE DRESS: AN ODE TO CLARITY</strong>
    
    "Soft as a whisper, bold as a vision."
    
    There is a profound power in simplicity. The Keke Dress was designed for the moments when you want to feel weightless—when the world is loud, but you are at peace. Rendered in a crisp, luminous white, this set is a blank canvas for your most significant moments, designed to reflect the light you carry within.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the weightlessness of morning mist and the soft edges of a dream, the Keke Dress plays with volume and transparency. The silhouette is a study in balance: the structured, bubble-hem skirt provides a grounded, playful foundation, while the sheer "aura" overlay adds a layer of mystery. It represents the duality of the modern woman—solid in her foundations, yet light in her spirit.
    
    <strong>DESIGN HIGHLIGHTS</strong>
    • <strong>The "Cloud" Silhouette:</strong> The voluminous bubble hem creates a rhythmic, bouncing movement with every stride. It’s designed to make you feel like you’re walking on air.
    • <strong>Pearl-Beaded Straps:</strong> Adorned with delicate, pearl-like beads, adding a touch of tactile luxury that sits like jewelry against the skin.
    • <strong>The "Aura" Overlay:</strong> A detachable veil of confidence. Wear it to create a soft, ethereal glow, or remove it to reveal the sleek, square-neck bodice beneath.
    
    <strong>THE FEELING</strong>
    It’s the silence of a gallery before the doors open. It’s the first deep breath of a vacation. To wear the Keke Dress is to embrace a new beginning—it is pure, intentional, and utterly sophisticated.`,
    media: [
      { type: 'video', src: 'images/p1_vid.mp4' },
      { type: 'image', src: 'images/p1_img1.jpg' },
      { type: 'image', src: 'images/p1_img2.jpg' },
      { type: 'image', src: 'images/p1_img3.jpg' },
      { type: 'image', src: 'images/p1_img4.jpg' },
      { type: 'image', src: 'images/p1_img5.jpg' },
      { type: 'image', src: 'images/p1_img6.jpg' },
      { type: 'image', src: 'images/p1_img7.jpg' }
    ],
    sizes: { S:95000 M:99500 L:104000 },
    stock: 10
  },

  // --- PRODUCT 2 ---
  2: {
    name: "STAR DRESS",
    description: "A magnificent, oversized avant-garde gown featuring 'Cloud' volume and architectural bell sleeves—a monochromatic masterpiece designed for 'supernova' moments.",
    story: `<strong>THE STAR DRESS: THE ZENITH OF LIGHT</strong>
    
    "A garment that refuses to be small."
    
    Stars are born from the most intense pressure in the universe, resulting in a light that travels across eons just to be seen. The Star Dress was designed for your "supernova" moments. Its stark, pure white palette isn't an absence of color, but rather the presence of all of them at once, shimmering with the potential of everything you are about to become.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    In a world that often asks women to shrink themselves, this dress is a rebellion—a literal cloud of presence that commands every inch of the room. The high neckline and dramatic, architectural bell sleeves create a "halo" effect, framing your face as the center of a brilliant constellation. It is for the woman who is untethered, radiant, and vast.
    
    <strong>THE DETAILS</strong>
    • <strong>The Silhouette:</strong> A magnificent, oversized avant-garde gown featuring an exaggerated "Cloud" volume that moves with a life of its own.
    • <strong>The Architecture:</strong> Sophisticated high-neck tailoring paired with dramatic, floor-sweeping bell sleeves for a look that is both modern and eternal.
    • <strong>The Fabric:</strong> Crafted from a premium, breathable textured weave that holds its shape while remaining light enough to catch the smallest breeze.
    • <strong>The Statement:</strong> A monochromatic masterpiece designed for gala entrances, editorial moments, or any occasion where being "unforgettable" is the requirement.
    
    <strong>THE FEELING</strong>
    Slipping into The Star Dress feels like stepping into a sanctuary. There is a profound sense of safety in its volume and a fierce power in its silhouette. When you wear this, you don't just enter a room; you change its atmosphere. You are the North Star in your own life’s journey.`,
    media: [
      { type: 'video', src: 'images/p2_vid.mp4' },
      { type: 'image', src: 'images/p2_img1.jpg' },
      { type: 'image', src: 'images/p2_img2.jpg' }
    ],
    sizes: { XL: 110000 },
    stock: 1
  },

  // --- PRODUCT 3 ---
  3: {
    name: "GLORY DRESS",
    description: "A sculptural cream masterpiece featuring ladder-cut architecture and kinetic fringe, designed for the woman who wears her triumph as art.",
    story: `<strong>THE GLORY DRESS: A REFLECTION OF RADIANCE</strong>
    
    "Triumph is a texture, not just a moment."
    
    True glory isn't the absence of struggle; it is the art of turning every trial into a masterpiece. The Glory Dress is designed for the woman who has walked through the fire and come out luminous. In a serene shade of cream, it is a visual representation of a soul that has been tested, refined, and remains undeniably whole.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    The "slashed" architecture of the sleeves is the heart of this design. It represents the idea that our "gaps"—the moments where we felt broken—are actually where the light gets in. The horizontal ribbing provides a structured rhythm, while the cascading fringe at the hem represents the uncontainable nature of a woman’s spirit.
    
    <strong>DESIGN HIGHLIGHTS</strong>
    • <strong>The Sculptural Sleeve:</strong> Intricate ladder-cut sleeves create a striking play of shadow and light—a bold, avant-garde detail that signals a fearless approach to style.
    • <strong>Textural Rhythm:</strong> Crafted with horizontal pleated bands, the fabric offers a tactile depth that hugs the silhouette with "second-skin" confidence.
    • <strong>The Living Hem:</strong> The floor-length fringe adds a kinetic element. With every step, the fringe dances, ensuring your presence is felt long after you’ve left the room.
    
    <strong>THE FEELING</strong>
    It is the golden hour after a long day; the feeling of standing at the summit. To wear the Glory Dress is to wear your triumph. When you step into the Glory, you are telling the world that you are both the warrior and the prize.`,
    media: [
      { type: 'video', src: 'images/p3_vid.mp4' },
      { type: 'image', src: 'images/p3_img1.jpg' },
      { type: 'image', src: 'images/p3_img2.jpg' },
      { type: 'image', src: 'images/p3_img3.jpg' },
      { type: 'image', src: 'images/p3_img4.jpg' },
      { type: 'image', src: 'images/p3_img5.jpg' },
      { type: 'image', src: 'images/p3_img6.jpg' },
      { type: 'image', src: 'images/p3_img7.jpg' },
      { type: 'image', src: 'images/p3_img8.jpg' }
    ],
    sizes: { XL: 75000 },
    stock: 1
  },

  // --- PRODUCT 4 ---
  4: {
    name: "DANNY'S POLKADOTS",
    description: "A transformative two-piece ensemble featuring a structured double-breasted foundation and a sweeping polka-dot 'shadow-play' overlay.",
    story: `<strong>THE DANNY’S POLKADOTS: THE ENSEMBLE OF TRANSFORMATION</strong>
    
    "They say a woman contains worlds, and 'The Danny' was designed to inhabit all of them."
    
    Inspired by the rhythmic balance of light and shadow, this piece is a tribute to the moments when you need to be two things at once: effortlessly professional and undeniably grand. It represents the "shadow play" of our lives—the mystery, the grace, and the dramatic entrance we all deserve to make.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    The inner dress is your foundation—it’s the "inner light," structured with double-breasted confidence and playful tie-shoulders that whisper of summer afternoons. But when the world demands more of you, the sweeping, floor-length outer layer transforms the silhouette into a masterpiece of motion, a whirlwind of polka dots that commands the room to slow down and take notice.
    
    <strong>THE DETAILS</strong>
    • <strong>The Foundation:</strong> A crisp, white double-breasted dress with a tailored V-neck and adjustable tie-shoulder straps for a custom fit.
    • <strong>The Drama:</strong> A lightweight, floor-sweeping outer robe featuring a bold "half-and-half" polka dot contrast that creates a mesmerizing visual when in motion.
    • <strong>The Versatility:</strong> Wear them together for an avant-garde gala look, or style the dress solo for a sophisticated brunch or business meeting.
    
    <strong>THE FEELING</strong>
    Wearing The Danny isn't just about putting on a garment; it’s about choosing your volume. In the dress alone, you are sharp, approachable, and classic. With the overlay, you are a walking poem. It’s for the woman who knows that her story isn't one-dimensional, and her wardrobe shouldn't be either.`,
    media: [
      { type: 'video', src: 'images/p4_vid.mp4' },
      { type: 'image', src: 'images/p4_img1.jpg' },
      { type: 'image', src: 'images/p4_img2.jpg' },
      { type: 'image', src: 'images/p4_img3.jpg' },
      { type: 'image', src: 'images/p4_img4.jpg' },
      { type: 'image', src: 'images/p4_img5.jpg' },
      { type: 'image', src: 'images/p4_img6.jpg' }
    ],
    sizes: { XL: 66000 },
    stock: 1
  },

  // --- PRODUCT 5 ---
  5: {
    name: "Fanny Dress",
    // Brief one-liner
    description: "A three-piece crimson masterpiece designed for the woman who refuses to be defined by a single silhouette.",
    story: `<strong>The Fanny Dress: A Trilogy of Self</strong>
    
    "Why choose one version of yourself when you can be all of them?"
    
    The Fanny Dress isn’t just an outfit; it’s a narrative of transformation. Drenched in a bold, unapologetic crimson, this three-piece ensemble was designed for the woman who is the architect of her own life.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the idea of "The Eternal Bloom," the Fanny Dress mimics the petals of a dark rose. Each layer represents a different chapter of a woman’s day. The deep texture of the fabric is intentional—it’s tactile and grounded.
    
    <strong>ONE SET, THREE LIVES</strong>
    • <strong>The Full Manifestation:</strong> The ruffled top and tiered skirt create a gown of commanding presence.
    • <strong>The Romantic Rebel:</strong> Pair the ruffled top with vintage denim for a bit of drama in the everyday.
    • <strong>The Grounded Goddess:</strong> The tiered skirt paired with silk camisole creates a silhouette of quiet confidence.
    
    <strong>THE FEELING</strong>
    When you slip into the Fanny Dress, you are putting on your armor and your art all at once. It’s a reminder that you have the power to change, to adapt, and to bloom.`,
    media: [
      { type: 'video', src: 'images/p5_vid.mp4' },
      { type: 'image', src: 'images/p5_img1.jpg' },
      { type: 'image', src: 'images/p5_img2.jpg' },
      { type: 'image', src: 'images/p5_img3.jpg' },
      { type: 'image', src: 'images/p5_img4.jpg' },
      { type: 'image', src: 'images/p5_img5.jpg' },
      { type: 'image', src: 'images/p5_img6.jpg' },
      { type: 'image', src: 'images/p5_img7.jpg' },
      { type: 'image', src: 'images/p5_img8.jpg' },
      { type: 'image', src: 'images/p5_img9.jpg' },
      { type: 'image', src: 'images/p5_img10.jpg' },
      { type: 'image', src: 'images/p5_img11.jpg' }
    ],
    sizes: { XL: 122000 },
    stock: 1
  },

  // --- PRODUCT 6 ---
  6: {
    name: "EASTER MAJESTY",
    description: "A triumphant fuchsia three-piece proclamation of faith and royalty, featuring architectural 'JESUS IS KING' eyelet detailing and a majestic, modular silhouette.",
    story: `<strong>THE EASTER MAJESTY: A LIVING PROCLAMATION</strong>
    
    "Your footsteps tell a story. Your presence declares a Kingdom."
    
    True majesty isn't found in a crown, but in the courage to carry your truth. The Easter Majesty was designed for the woman who walks with a divine weight—one who knows she is a daughter of the King. Drenched in a vibrant, triumphant fuchsia, this three-in-one set is a celebration of the ultimate victory.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the "Triumphal Entry," this dress is built on the concept of visible faith. The most striking detail—the words "JESUS IS KING" meticulously crafted in gold eyelets across the back—is a message for those walking behind you, a reminder of the light you carry.
    
    <strong>THREE PERSPECTIVES OF POWER</strong>
    • <strong>The Full Decree (The Complete Look):</strong> Worn with the grommet-adorned cape and sweeping train, this is high-fashion armor for moments where your faith and fashion must be undeniable.
    • <strong>The Sovereign Architect (The Peplum Set):</strong> Remove the cape to reveal a structured, button-down peplum bodice. Sharp, modern, and commanding—perfect for leadership and speaking engagements.
    • <strong>The Refined Legacy (The Maxi Skirt):</strong> The button-down maxi skirt stands alone as a piece of art, with the "Jesus is King" inscription serving as a hidden gem of your wardrobe.
    
    <strong>THE FEELING</strong>
    It is the roar of a lioness. It is the peace of a cathedral. It is the bold, beautiful intersection of high-concept fashion and eternal truth. To wear the Easter Majesty is to embrace your divine heritage.`,
    media: [
      { type: 'video', src: 'images/p6_vid.mp4' },
      { type: 'image', src: 'images/p6_img1.jpg' },
      { type: 'image', src: 'images/p6_img2.jpg' },
      { type: 'image', src: 'images/p6_img3.jpg' },
      { type: 'image', src: 'images/p6_img4.jpg' }
    ],
    sizes: { XL: 205000 },
    stock: 1
  },

  // --- PRODUCT 7 ---
  7: {
    name: "DEEPER DRESS",
    description: "A layered honey-gold ensemble of protective elegance, designed for the woman of substance who commands through quiet authority and inner depth.",
    story: `<strong>THE DEEPER DRESS: AN EXPLORATION OF THE INNER SELF</strong>
    
    "The most beautiful parts of you are the ones hidden beneath the surface."
    
    There is a specific kind of beauty that only reveals itself over time. The Deeper Dress is a tribute to the woman of substance—the one who doesn't need to shout to be heard. Rendered in a rich, sun-baked mustard, this three-in-one ensemble is a study in structure and soul. It is for the woman who values her privacy as much as her presence.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the strength of ancient earth and the sanctuary of one's own thoughts, the Deeper Dress was designed to feel like a "haven." The high neckline and the exaggerated, sculptural "Aura" cape provide a sense of protective elegance. The name "Deeper" refers to the layers of the garment and the layers of the woman: you see the silhouette first, but the true character is found in how she carries the weight of her own wisdom.
    
    <strong>THREE LAYERS OF DEPTH</strong>
    • <strong>The Shielded Visionary (The Full Look):</strong> With the structured cape and the belted wrap-around skirt, this look is a fortress of fashion. It is for the moments where you are the strategist and the thinker.
    • <strong>The Unwavering Core (The Column Dress):</strong> A sleek, high-neck foundation that represents the "true self" that remains when all external expectations are stripped away.
    
    • <strong>The Fluid Diplomat (The Belted Grace):</strong> Styled over the base dress without the cape, creating a silhouette of movement for the woman grounded in her power but open to the world.
    
    <strong>THE FEELING</strong>
    It is the comfort of a leather-bound book; the feeling of knowing exactly who you are. When you put this on, you aren't just wearing a color; you are wearing the warmth of a sunset and the stability of the earth. It is sophisticated, layered, and profoundly deep.`,
    media: [
      { type: 'video', src: 'images/p7_vid.mp4' },
      { type: 'image', src: 'images/p7_img1.jpg' },
      { type: 'image', src: 'images/p7_img2.jpg' },
      { type: 'image', src: 'images/p7_img3.jpg' },
      { type: 'image', src: 'images/p7_img4.jpg' },
      { type: 'image', src: 'images/p7_img5.jpg' }
    ],
    sizes: { XL: 145000 },
    stock: 1
  },

  // --- PRODUCT 8 ---
  8: {
    name: "KAY AMBROSE",
    description: "A timeless 'Living Manuscript' featuring an earth-toned botanical print, a goddess-waist, and a majestic handkerchief hem for the woman of calm authority.",
    story: `<strong>THE AMBROSE DRESS: THE LIVING MANUSCRIPT</strong>
    
    "Carry the weight of wisdom with the lightness of grace."
    
    The word "Ambrose" translates to immortal, and this dress was crafted to feel exactly like that—timeless. The unique, earth-toned print is reminiscent of weathered maps, ancient stone, or the intricate text of a forgotten scroll. It tells a story of journeys taken and paths yet to be discovered.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    The design honors the strength of the earth with its mossy greens and deep blacks, while the silhouette pays homage to the goddesses of old who wore the wind as their armor. It is the centerpiece for those who seek to bridge the gap between the ancient and the modern.
    
    <strong>THE DETAILS</strong>
    • <strong>The Silhouette:</strong> A stunning maxi-length gown featuring a smocked "goddess" waist that defines the figure while offering maximum comfort.
    • <strong>The Hem:</strong> An asymmetrical, tiered handkerchief hemline that creates mesmerizing movement and "float" as you walk.
    • <strong>The Overlay:</strong> A majestic, attached back-drape that transforms the dress into a regal kaftan-style ensemble, offering coverage and drama in equal measure.
    • <strong>The Print:</strong> A custom botanical-meets-abstract motif in a palette of moss green, charcoal, and parchment, designed to look like a piece of living history.
    
    <strong>THE FEELING</strong>
    To wear the Ambrose is to feel completely unburdened. Whether you are standing still or moving through a crowd, you feel like a force of nature—fluid, grounded, and utterly unforgettable. It’s for the woman who enters a room and brings a sense of calm authority with her.`,
    media: [
      { type: 'video', src: 'images/p8_vid.mp4' },
      { type: 'image', src: 'images/p8_img1.jpg' },
      { type: 'image', src: 'images/p8_img2.jpg' },
      { type: 'image', src: 'images/p8_img3.jpg' },
      { type: 'image', src: 'images/p8_img4.jpg' },
      { type: 'image', src: 'images/p8_img5.jpg' },
      { type: 'image', src: 'images/p8_img6.jpg' }
    ],
    sizes: { XL: 80000 },
    stock: 1
  },

  // --- PRODUCT 9 ---
  9: {
    name: "Zedeck Dress",
    description: "A soulful emerald masterpiece designed for the woman who changes the energy of every room she enters through effortless, regal ease.",
    story: `<strong>The Zedeck Dress: A Study in Movement</strong>
    
    "Wear the garden. Be the growth."
    
    There is a specific kind of confidence that comes from wearing the color of life. The Zedeck Dress is designed for the woman who doesn't just enter a room—she changes the energy of it. It is a tribute to the lushness of nature and the unfiltered grace of a woman who is comfortable in her own skin.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the rhythmic swaying of willow trees and the hidden depths of a forest canopy, this dress was created to move with you, not just on you. The fabric is light enough to catch the breeze but substantial enough to hold the architecture of those stunning, sculptural ruffles.
    
    <strong>DESIGN HIGHLIGHTS</strong>
    • <strong>The Infinite Silhouette:</strong> A floor-sweeping maxi cut that provides a canvas of pure, saturated emerald, designed to elongate the frame.
    • <strong>The Cascading Ruffle:</strong> Your artistic tool. Drape it over your shoulder for a dramatic, asymmetrical look, or let it flow freely to create a trail of movement.
    • <strong>The Breathable Core:</strong> Crafted for comfort, ensuring that while you look like a work of art, you feel entirely at home.
    
    <strong>THE FEELING</strong>
    It’s that moment of stepping into the sunlight after a long rain. It’s refreshing, powerful, and deeply grounded. It’s not just a dress; it’s your own personal "evergreen" moment.`,
    media: [
      { type: 'video', src: 'images/p9_vid.mp4' },
      { type: 'image', src: 'images/p9_img1.jpg' },
      { type: 'image', src: 'images/p9_img2.jpg' },
      { type: 'image', src: 'images/p9_img3.jpg' },
      { type: 'image', src: 'images/p9_img4.jpg' },
      { type: 'image', src: 'images/p9_img5.jpg' },
      { type: 'image', src: 'images/p9_img6.jpg' },
      { type: 'image', src: 'images/p9_img7.jpg' },
      { type: 'image', src: 'images/p9_img8.jpg' },
      { type: 'image', src: 'images/p9_img9.jpg' }
    ],
    sizes: { XL: 91000 },
    stock: 1
  },

  // --- PRODUCT 10 ---
  10: {
    name: "ELLA DRESS",
    description: "A masterclass in regal composure, designed for the woman who commands respect through a majestic silhouette and sophisticated, structured poise.",
    story: `<strong>THE ELLA DRESS: THE MANTLE OF PRESENCE</strong>
    
    "Quiet the room with your confidence."
    
    There is a certain type of power that doesn't need to be explained. The Ella Dress is designed for the woman who knows exactly who she is. Draped in a deep, saturated emerald, this gown is a tribute to steadfastness and sophisticated poise. It is for the moments where you are the anchor, the leader, and the light.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    Inspired by the concept of "The Modern Matriarch," the Ella Dress combines sharp, clean lines with fluid, sculptural draping. The intricate, sunburst ruching at the waist isn't just a detail—it’s a visual representation of energy radiating from a central point of strength.
    
    <strong>DESIGN HIGHLIGHTS</strong>
    • <strong>The Sovereign Sash:</strong> An asymmetrical drape flowing from the shoulder acting as "style-armor," offering a sense of protection and high-fashion drama.
    • <strong>Architectural Ruching:</strong> Precision-engineered gathering at the hip that creates a multi-dimensional texture, celebrating the form with sophisticated complexity.
    • <strong>The Saturated Hue:</strong> A jewel-toned emerald designed to symbolize growth that has matured into wisdom.
    
    <strong>THE FEELING</strong>
    It is the weight of a crown that doesn't feel heavy. It’s the calm before a standing ovation. To wear the Ella Dress is to step into your highest self—elegant, immovable, and entirely unforgettable.`,
    media: [
      { type: 'video', src: 'images/p10_vid1.mp4' },
      { type: 'image', src: 'images/p10_img1.jpg' },
      { type: 'image', src: 'images/p10_img2.jpg' },
      { type: 'image', src: 'images/p10_img3.jpg' },
      { type: 'image', src: 'images/p10_img4.jpg' },
      { type: 'image', src: 'images/p10_img5.jpg' },
      { type: 'video', src: 'images/p10_vid2.mp4' },
      { type: 'image', src: 'images/p10_img6.jpg' },
      { type: 'image', src: 'images/p10_img7.jpg' },
      { type: 'image', src: 'images/p10_img8.jpg' },
      { type: 'image', src: 'images/p10_img9.jpg' },
      { type: 'image', src: 'images/p10_img10.jpg' },
      { type: 'image', src: 'images/p10_img11.jpg' }
    ],
    sizes: { XL: 59000 },
    stock: 1
  },

  // --- PRODUCT 11 ---
  11: {
    name: "THE DESIRE",
    description: "A sculptural nude-blush masterpiece featuring intricate full-body shirring, a cross-heart bodice, and dramatic hip drapery.",
    story: `<strong>THE DESIRE: THE ARCHITECTURE OF ALLURE</strong>
    
    "Desire isn't just a feeling; it is a form."
    
    This dress was designed to celebrate the landscape of the female body. "The Desire" is a study in texture—a garment that doesn't just sit on the skin but moves with it. Rendered in a soft, sun-baked blush tone, it blurs the line between the woman and the art she is wearing.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    It is for the woman who understands that true allure isn't about revealing everything, but about the mystery of the silhouette. The dress hugs every curve like a second skin, offering a supportive embrace that sculpts the figure without restricting it.
    
    <strong>THE DETAILS</strong>
    • <strong>The Living Texture:</strong> The bodice is crafted with high-density shirring (ruching) that mimics the ripples of sand dunes, expanding and contracting with your movement.
    • <strong>The Sculpted Hip:</strong> The texture descends into a dramatic V-shape, releasing into voluminous, architectural folds that exaggerate the curves with avant-garde grace.
    • <strong>The Cross-Heart Bodice:</strong> Smooth bands cross over the chest and wrap around the shoulders, creating a modern geometric frame for the face.
    
    <strong>THE FEELING</strong>
    Protective yet undeniably sensual. When you walk, the heavy drapes at the hip swing with a rhythmic grace, making you feel like a living statue—timeless, artistic, and breathtakingly grounded.`,
    media: [
      { type: 'image', src: 'images/p11_vid.mp4' }
    ],
    sizes: { XL: 95000 },
    stock: 1
  },

  // --- PRODUCT 12 ---
  12: {
    name: "SERAPHINA'S GOWN",
    description: "An angelic powder-blue Swiss dot gown featuring a multi-way wrap architecture designed to evoke the weightless 'soft power' of a dawn sky.",
    story: `<strong>THE SERAPHINA GOWN: THE WEIGHT OF GRACE</strong>
    
    "Strength isn't always heavy; sometimes, it’s as light as a wing."
    
    The Seraphina Gown is a tribute to "soft power"—the ability to remain calm when the world is loud. Derived from the word for high-ranking angels, this gown wraps around the body like protective, ethereal wings. The powder-blue hue captures the sky at the exact moment dawn breaks—a symbol of new beginnings and total clarity.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    The intricate "Swiss dot" texture represents the small, beautiful details of our lives that, when woven together, create something magnificent. The unique wrap-around bodice acts as a gentle embrace, securing you at the waist while the floor-length skirt provides a sense of regal height. It is a dress for the woman who is the "calm in the storm."
    
    <strong>THE DETAILS</strong>
    • <strong>The Texture:</strong> Crafted from premium powder-blue Swiss dot fabric with a tactile, "dew-drop" finish that adds depth and whimsy.
    • <strong>The Architecture:</strong> A sophisticated multi-way wrap design that creates a draped effect over the shoulders, transitioning into a cinched, pleated waist.
    • <strong>The Movement:</strong> A voluminous, full-length accordion-style skirt that offers maximum flow and a dramatic, ethereal silhouette.
    • <strong>The Versatility:</strong> Perfectly suited for high-end galas or ethereal weddings where you want to feel untouchable.
    
    <strong>THE FEELING</strong>
    Wearing the Seraphina feels like being held by a cloud. It is incredibly light, designed to catch the air as you walk, giving you the sensation of floating rather than stepping. It’s a reminder that you don’t have to be loud to be noticed; you just have to be authentically you.`,
    media: [
      { type: 'video', src: 'images/p12_vid.mp4' },
      { type: 'image', src: 'images/p12_img1.jpg' },
      { type: 'image', src: 'images/p12_img2.jpg' },
      { type: 'image', src: 'images/p12_img3.jpg' },
      { type: 'image', src: 'images/p12_img4.jpg' },
      { type: 'image', src: 'images/p12_img5.jpg' },
      { type: 'image', src: 'images/p12_img6.jpg' }
    ],
    sizes: { XL: 87000 },
    stock: 1
  },

  // --- PRODUCT 13 ---
  13: {
    name: "KAMSI KIMONO",
    description: "A vibrant three-panel 'Wearable Prayer' in sky blue, crisp white, and leaf green, designed for the woman who bridges worlds with grace and boundless freedom.",
    story: `<strong>THE KAMSI DRESS: THE SPECTRUM OF HARMONY</strong>
    
    "A wearable answer to a prayer for joy, abundance, and a life lived in full color."
    
    In many cultures, the name Kamsi translates to "as I asked of God." This piece is a celebration of intention. Nature doesn’t settle for just one shade, and neither should you. The Kamsi Dress was inspired by the horizon line where the earth meets the sky—a place where the deep peace of blue, the purity of white, and the vital growth of green all exist in perfect balance.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    It is a narrative of transition; it represents the different chapters of our journey, reminding us that every "color" of our experience is necessary to create a masterpiece. It is designed for the woman who is a bridge—someone who connects people, ideas, and worlds.
    
    <strong>THE DETAILS</strong>
    • <strong>The Palette:</strong> A bold, three-panel color-block design featuring sky blue, crisp white, and vibrant leaf green for maximum visual impact.
    • <strong>The Silhouette:</strong> An ethereal, floor-length "wing" overlay that provides dramatic movement and a regal, open-front aesthetic.
    • <strong>The Fabric:</strong> Lightweight, high-quality chiffon that offers a soft, skin-skimming feel and a beautiful translucent finish.
    • <strong>The Versatility:</strong> Perfect over a sleek black base to let the colors pop, or layered over swimwear for an avant-garde resort look.
    
    <strong>THE FEELING</strong>
    Walking in the Kamsi feels like carrying your own atmosphere. The sheer, expansive panels catch the light and the wind, turning a simple stroll into a grand procession. When you wrap yourself in these colors, you feel a sense of boundless freedom and the quiet confidence that you are exactly where you are meant to be.`,
    media: [
      { type: 'video', src: 'images/p13_vid.mp4' },
      { type: 'image', src: 'images/p13_img1.jpg' },
      { type: 'image', src: 'images/p13_img2.jpg' },
      { type: 'image', src: 'images/p13_img3.jpg' }
    ],
    sizes: { XL: 30000 },
    stock: 1
  },

  // --- PRODUCT 14 ---
  14: {
    name: "ELO DRESS",
    description: "A visual representation of finding your center, featuring dramatic balloon sleeves and a radiant golden 'heart' set against a sophisticated botanical motif.",
    story: `<strong>THE ELO DRESS: THE ART OF THE INNER CIRCLE</strong>
    
    "Find your center in a world of beautiful chaos."
    
    Named after the concept of "Eloquence," the Elo Dress tells the story of the inner sun. It was designed for the woman who isn't afraid to be the focal point—not because she seeks attention, but because she owns her space so completely that the world naturally orbits around her.
    
    <strong>THE STORY BEHIND THE DESIGN</strong>
    The intricate, slate-grey botanical pattern represents the complexity of our daily lives—the noise, the movement, and the beautiful layers of our experiences. But at the heart of it all sits the "O"—a bold, golden portal of clarity. It is a reminder that no matter how busy the pattern of life becomes, your core remains bright, steady, and radiant.
    
    <strong>THE DETAILS</strong>
    • <strong>The Silhouette:</strong> An avant-garde, off-the-shoulder mini dress with dramatic balloon sleeves that gather at the wrist, offering a sense of "wearable art."
    • <strong>The Centerpiece:</strong> A hand-finished, multi-layered circular appliqué featuring a vibrant mustard-gold core that serves as the dress’s "heart."
    • <strong>The Fabric:</strong> A premium, structured textile with a sophisticated monochrome leaf motif, offering a subtle sheen that catches the light.
    
    <strong>THE FEELING</strong>
    Slipping into the Elo Dress feels like an act of liberation. The off-the-shoulder neckline celebrates your strength, while the voluminous sleeves give you the freedom to move without restriction. When you wear Elo, you feel grounded in your own identity, highlighted by that unmistakable burst of golden light at your chest.`,
    media: [
      { type: 'video', src: 'images/p14_vid.mp4' },
      { type: 'image', src: 'images/p14_img1.jpg' },
      { type: 'image', src: 'images/p14_img2.jpg' },
      { type: 'image', src: 'images/p14_img3.jpg' },
      { type: 'image', src: 'images/p14_img4.jpg' },
      { type: 'image', src: 'images/p14_img5.jpg' },
      { type: 'image', src: 'images/p14_img6.jpg' },
      { type: 'image', src: 'images/p14_img7.jpg' }
    ],
    sizes: { XL: 25000 },
    stock: 1
  }
};

// ================= PAGE LOGIC =================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
let selectedSize = ""; 

if (product) {
  // 1. TEXT DETAILS
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("stockCount").textContent = `${product.stock} items available`;

  // --- ADD THESE LINES BELOW ---
  const storyEl = document.getElementById("productStory");
  const storySection = document.getElementById("storySection");
  
  if (product.story) {
    storyEl.innerHTML = product.story; // Use innerHTML to allow <strong> tags
    storySection.style.display = "block";
  } else {
    storySection.style.display = "none"; // Hide section if no story exists yet
  }
  // ------------------------------

  // 2. SLIDER
  const slider = document.getElementById("productSlider");
  const dotsContainer = document.getElementById("sliderDots");

  product.media.forEach((item, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide-item";
    
    if (item.type === 'video') {
      slideDiv.innerHTML = `<video src="${item.src}" controls loop muted playsinline autoplay></video>`;
    } else {
      slideDiv.innerHTML = `<img src="${item.src}" alt="${product.name}">`;
    }
    slider.appendChild(slideDiv);

    const dot = document.createElement("div");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dotsContainer.appendChild(dot);
  });

  // 3. TRACKER
  slider.addEventListener("scroll", () => {
    const scrollPos = slider.scrollLeft;
    const width = slider.offsetWidth;
    const index = Math.round(scrollPos / width);
    const dots = document.querySelectorAll(".dot");
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });

  // 4. PRICE & SIZES
  const sizeContainer = document.getElementById("sizeContainer");
  const priceEl = document.getElementById("productPrice");
  const firstSize = Object.keys(product.sizes)[0];
  selectedSize = firstSize;

  Object.keys(product.sizes).forEach(size => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (size === firstSize ? " active" : "");
    btn.textContent = size;
    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = size;
      priceEl.textContent = "₦" + product.sizes[size].toLocaleString();
    };
    sizeContainer.appendChild(btn);
  });

  priceEl.textContent = "₦" + product.sizes[firstSize].toLocaleString();

  // 5. CART
  document.getElementById("addToCart").addEventListener("click", () => {
    if (product.stock <= 0) {
      alert("Sorry, this item is out of stock!");
      return;
    }
    let thumbnail = "";
    const imageItem = product.media.find(m => m.type === 'image');
    thumbnail = imageItem ? imageItem.src : "favicon.png"; 

    const cartItem = {
      id: productId,
      name: product.name,
      size: selectedSize,
      price: product.sizes[selectedSize],
      image: thumbnail, 
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i.id === productId && i.size === selectedSize);
    if (existing) { existing.quantity += 1; } else { cart.push(cartItem); }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart!");
  });

  // 6. ARROW BUTTONS (PC)
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if(prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => { slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" }); });
    nextBtn.addEventListener("click", () => { slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" }); });
  }
}
