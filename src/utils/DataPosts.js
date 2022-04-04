export const posts = [
  {
    id: 1,
    cover: "/static/images/posts/3.jpg",
    title: "Example post title",
    createdAt: new Date(2022, 0, 1),
    author: {
      name: "Author Name",
      avatarUrl: "/static/images/avatars/avatar_1.png",
    },
    body: `<h1>Heading H1</h1> <br/> <h2>Heading H2</h2> <br/> <h3>Heading H3</h3> <br/> <h4>Heading H4</h4> <br/> <h5>Heading H5</h5> <br/> <h6>Heading H6</h6> <br/> <hr/> <h3>Paragraph</h3> <br/> <p>Lorem Ipsum</p> <br/><br/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex fermentum, rhoncus elit varius, sodales ligula. Sed rutrum purus in diam mollis hendrerit. Ut convallis, magna eget fringilla convallis, risus tortor lobortis mi, et pretium orci dolor eu tortor. Nam congue tortor eget tortor luctus faucibus. Aliquam vulputate augue non erat tempus, sit amet dictum ipsum sagittis. Mauris ornare eros sit amet nisl dignissim viverra. Donec laoreet fringilla fringilla. Sed lectus turpis, finibus at finibus ut, lacinia eu lacus. Morbi lacinia congue libero quis ullamcorper.</p> <br/> <p><strong>This is strong text.</strong></p> <p><em>This is italic text</em></p> <p><u>This is underline text</u></p> <hr> <h3>Unordered list</h3> <br/> <ul><li>Implements <a href="https://google.com">This is an external link</a></li><li>Implements  <a href="/movie">This is an inside link</a></li> </ul> <hr> <h3>Ordered list</h3> <br/> <ol> <li>Analysis</li> <li>Design</li> <li>Implementation</li> </ol> <hr> <h3>Blockquote</h3> <br/> <blockquote>Mama always said: "Life was like a box of chocolates. You never know what you’re gonna get.<br/><em>~Forrest Gump, 1994</em></blockquote> <hr> <br/><br/> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p><br></p> <p>Why do we use it?</p> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> <br/><br/> <p><img alt="1" src='/static/images/posts/1.jpg'/></p> <br/><br/> <p>Aliquam erat volutpat. Etiam vel ante varius, mattis ipsum eu, rutrum eros. Phasellus condimentum, nisi a finibus porttitor, turpis nunc interdum neque, consectetur pharetra mauris augue vitae magna. Morbi pharetra accumsan metus, sit amet fermentum sem pharetra ut. Pellentesque id tortor ligula. Vivamus lacinia odio id turpis vestibulum, et iaculis odio imperdiet. Proin sit amet nibh nec lacus porttitor consequat ut quis nisl. Pellentesque maximus mauris eros, in vulputate libero egestas id. Etiam ut porttitor neque, ac blandit ante. Vestibulum nec sapien eget diam aliquam tempus. Curabitur varius nunc ipsum, sit amet dictum tellus auctor sed. Nullam ultricies eros orci, non blandit dui aliquet vitae. Vestibulum ullamcorper vestibulum congue. Sed egestas diam in blandit iaculis. In non vehicula arcu.</p> <br/><br/> <p><img alt="2" src='/static/images/posts/2.jpg'/></p>`,
  },
  {
    id: 2,
    cover: "/static/images/posts/2.jpg",
    title:
      "The Batman VFX Supervisor On Crafting That Batmobile Chase, CGI Vs Practical, And More [Interview]",
    createdAt: new Date(2022, 3, 2),
    author: {
      name: "John Doe",
      avatarUrl: "/static/images/avatars/avatar_2.png",
    },
    body: `<p>It can be incredibly tempting to watch an exceedingly well-made film — even a big-budget blockbuster about one of the most popular comic book characters of all time — and chalk up every aspect of it to a sole author. On one hand, viewers who have followed director Matt Reeves' career can tell just how successfully he infused "The Batman" with his distinctive filmmaking trademarks. Look no further than his similar approach to the latter two "Planet of the Apes" movies, with "War for the Planet of the Apes" specifically boasting many of the same Biblical-scale concerns that "The Batman" would eventually cover.</p> <p>But as appealing as auteur theory can be, the truth is oftentimes much more complicated. Though a few significant individuals may receive the lion's share of credit in marketing and publicity, it truly takes an army spread throughout every level of the filmmaking process to bring a movie like "The Batman" across the finish line.</p> <p>If that fact didn't already ring true simply by watching (the Oscar-winning) Greig Fraser's gorgeous cinematography, listening to Michael Giacchino's impeccable score, or gawking at production designer James Chinlund's hellish realization of Gotham City throughout the actual movie, it became abundantly clear during the course of my recent conversation with Visual Effects Supervisor Anders Langlands. The New Zealand-based VFX artist has a storied and widely respected legacy, having worked for Wētā FX — the groundbreaking VFX company that was founded by Peter Jackson and revolutionized the industry with "The Lord of the Rings" trilogy — on recent movies such as "Ad Astra," "Mulan," and "Zack Snyder's Justice League." All of that experience (and more) was put to the test in "The Batman," allowing Wētā to accomplish the impossible: Uniting us in near-universal praise over a modern superhero movie's excellent VFX work.</p> <p>Now that the dust has settled after the initial release of "The Batman" in early March, I was able to pick Langlands' brain and talk about the value of his prior work with Matt Reeves on "Apes," the challenges of putting together the Batmobile chase sequence, the question of whether Stagecraft truly is "the next big thing," and even his thoughts on that never-ending "CGI vs practical effects" debate.</p> <em>This interview has been edited for clarity and brevity.</em><br/><br/><h3>'It really feels like a filmmaking company more than a visual effects company'</h3><img alt="batman" src="https://www.slashfilm.com/img/gallery/the-batman-vfx-supervisor-on-crafting-that-batmobile-chase-cgi-vs-practical-debates-and-more-interview/it-really-feels-like-a-filmmaking-company-more-than-a-visual-effects-company-1648827169.webp"> <b>I remember watching "The Lord of the Rings" and all those behind-the-scenes breakdowns of everything Wētā contributed to it. I'm curious: Do you get the same sense of legacy, working with a company as genuinely historic as Wētā?</b> <p>I definitely get a sense of the history and the legacy. Yeah. All our internal tools ... puns are named after [laughs] "The Lord of the Rings" quite often. It's really cool. I remember clearly first arriving there and particularly in Manuka Street, which was sort of the central office at the time. There's a whole bunch of props, you've got the [Witch King's] armor, just standing there in reception. You can't escape it down here at all. Even Wellington airport, when you first actually fly in, there's Gandalf riding a giant Eagle hovering over the arrivals lounge. So there's definitely a sense of that everywhere here.</p><br/><br/> Read More: <a href="https://www.slashfilm.com/818872/the-batman-vfx-supervisor-on-crafting-that-batmobile-chase-cgi-vs-practical-and-more-interview/?utm_campaign=clip">slashfilm.com</a>`,
  },
  {
    id: 3,
    cover: "/static/images/posts/1.jpg",
    title:
      "Benedict Cumberbatch Blames That Blasted Spider-Man For Breaking The MCU",
    createdAt: new Date(2022, 2, 31),
    author: {
      name: "John Doe",
      avatarUrl: "/static/images/avatars/avatar_1.png",
    },
    body: "None",
  },
  {
    id: 4,
    cover: "/static/images/posts/4.jpg",
    title:
      "Pixar’s ‘Turning Red’ on Generational Trauma: How a Big Red Panda Teaches Us Empathy",
    createdAt: new Date(2022, 3, 1),
    author: {
      name: "John Doe",
      avatarUrl: "/static/images/avatars/avatar_3.png",
    },
    body: `<h4>Overview </h4> <p>Released on March 11th, ‘Turning Red’ quickly became a fan favorite on the popular streaming platform – Disney+. Following the story of a 13-year-old girl, Meilin Lee (voiced by Rosalie Chiang), this film finds a way to dive into complicated topics such as generational trauma, family relationships, and even coming of age in a wholesome and comical manner. It is hard to watch ‘Turning Red’ without finding a character to relate to, even if it’s not Mei. For a lot of parents watching the film with their kids, Mei’s parents are surely relatable, just as Mei is for younger audiences. This characteristic does an incredible job at helping the film to reveal the parts of ourselves that we are so used to denying or even actively hiding. Of course, ‘Turning Red’ can easily be enjoyed as a simple cartoon. However, for those looking to gain a deeper appreciation: beware, spoilers ahead!</p>  <h4>‘Turning Red’: Honor Your Parents </h4> <p>The film starts off by introducing the audience to Mei’s number one rule: “honor your parents, they are the supreme beings that gave you life”. Right off the bat, the viewer can tell that this family environment is slightly obsessive. This doesn’t necessarily mean that it’s unhealthy, however, we do begin to see themes that will evolve later on in the plot. </p> <p>Mei loves her family, she adores them. Doing every little thing her parents ask of her, she thrives off of the validation she gets in the academic setting and at home. Working with her mother at their family-owned temple, she often ditches her friends to take care of her duties. This happens so often that Mei’s friends state that they believe she is brainwashed. </p> <p>Despite this, Mei believes that she is fully her own person, stating that she makes her own moves. Though she adds “some of my moves are also hers” – when talking about her mother (voiced by Sandra Oh). A profound portion of Mei’s identity is based entirely on her parents. Now, this could mean several things, depending on who is watching the movie and how they choose to interpret it. For some, this may mean that Mei’s parents have been stable and strong role models. For others, this may mean that Mei’s parents unintentionally taught her that they know best, no matter what. These two paths are drastically different, the former being healthy and balanced, while the ladder can quickly become toxic if handled incorrectly.</p> <p>Either way, Mei believes that her parents can do no wrong and deserve nothing less than above and beyond her best. From perfect grades, to perfect behavior, and unmatched loyalty to top it off, Mei offers her parents an unbelievable amount of energy and dedication. Of course, this energy is reciprocated by her parents, who are depicted as providing for Mei’s every want and need. Though it’s important to remember that this sort of relationship is more appropriate for peers, rather than family. Meaning that in a balanced family environment, the parents do carry more responsibility. This is not to criticize the family dynamic in ‘Turning Red’, instead, the primary purpose of this section is to shine a light onto the ways in which generational trauma can lead to parents having unreasonable expectations for their children. </p> <p>Oftentimes, when an individual who was raised in an environment that perpetuated the generational trauma pertaining to that family grows up and has their own children, they will attempt to give their child the life that they never had. Though sometimes, these individuals will also neglect to see their child as their own person, instead of an extension of themselves. This can lead to the parent treating their child like they would treat themselves, which is often unhealthy and can lead to an exceptional lack of boundaries.</p> <p>This is demonstrated in ‘Turning Red’ when Ming (Mei’s mother) provides Mei with a nurturing and gentle environment to grow up in, rather than the strict and firm environment that she was raised in. However, Ming also treats Mei as a “mini me”, expecting her to behave in the same manner that she would. This leads to a treatment that is age-inappropriate for Mei. At just 13, Ming expects Mei to act like an adult and carry adult responsibilities. Of course, Mei is happy to do just that, though she misses out on a variety of different activities that are popular with kids her age, in favor of abiding by Ming’s expectations. </p> <h4>Unleash the Panda</h4> <p>After developing a crush on a local teenage convenience store clerk, Mei draws some sketches in her notebook of her with him. Upon discovering this notebook, Ming drives Mei down to the store and confronts the clerk in front of kids from Mei’s school. As everyone in the store laughs hysterically, Mei feels like falling through the ground. When she and her mother get home, Mei climbs into bed and screams into a pillow. The audience then witnesses a montage of Mei trying to cope with the profound embarrassment that she just experienced. During this montage, Mei comes up to the mirror and slaps herself across the face, yelling out “you are her pride and joy, so act like it” – referring to her mother once more. This small moment reveals how much pressure she puts on herself to impress her mother. </p>  <p>Later that night, Mei struggles with a nightmare about her ancestor, Sun Yee (the guardian of red pandas). When she wakes up, and looks in the mirror, she is greeted by a fluffy orange animal instead of her regular reflection. Understandably, she panics. Though soon enough, she discovers that the panda only comes out when she experiences intense emotions. Following that logic, Mei elects to keep her cool and go to school. However, after a series of rather embarrassing events, the panda returns. This leads to Mei wrecking her home and being discovered in panda form by her parents.</p> <p>The Lee family enters the altar room of Sun Yee, and Ming reveals the history of this panda “curse”. We find out that during wartime, Lee’s ancestor – Sun Yee – asked the Gods to turn her into a red panda so that she could protect her daughters. When her daughters came of age, she passed what she thought was a blessing down to them. Since then, every woman in the family has become a panda when she came of age. Mei is infuriated by this, believing that Sun Yee cursed her bloodline because of her wartime trauma. However, her mother lets her know that the panda spirit can be banished into an object and Mei could be “cured”. This news relieves the girl to an extent. Although the red moon, during which the ritual can be performed, is a whole month away. </p>  <h4>Popular Panda</h4> <p>As time passes and Mei learns to control the panda, she discovers that kids at her school are willing to pay to take pictures with the fuzzy creature. She and her friends band together to arrange panda photoshoots, merchandise, and even parties so that they can earn enough money to buy tickets to see their favorite boy band. This scheme lasts about three weeks, leaving the girls with enough money for three tickets. Mei also grows an attachment to her panda form, leading her to question whether or not she wants to go through with the banishing ritual. </p>  <h4>The Ritual</h4> <p>The trouble is, the ritual and the concert are on the same day. The ritual commences, and Mei finds herself in a magical bamboo forest where she meets the spirit of Sun Yee. The spirit opens a portal for Mei. If she walks through, her panda spirit will remain in the forest and her life will go back to what it used to be. Seems like a fair deal, right? Well, not to Mei. As she makes her way through the portal, she begins remembering all the joy and fulfillment the panda has brought her. This moment is essential to the theme of breaking generational trauma within the film. </p>  <h4>From Curses to Blessings</h4> <p>If we look at the panda “curse” as a representation of generational trauma, that began with Sun Yee during wartime, then we can see how this trauma evolves to keep a grip on the Lee family. Starting as wartime traumas that take shape from PTSD (post-traumatic stress disorder) associated with food insecurity, death, and injury; these conditions make their way from generation to generation, manifesting themselves in different ways. By the time this trauma gets to Mei’s generation, it takes shape in her lack of independent identity – or more accurately, severely suppressed independent identity. As Mei chooses the panda over her mother’s approval, she breaks that cycle and takes back this “curse” for its original purpose – a blessing. </p>  <p>An argument of epic proportion ensues between Mei and Ming, during which Mei expresses her frustration with her mother’s unrealistic expectations of perfection. This is arguably the first time in Mei’s life that she has stood up to her mother. Of course, Ming interprets this as severe disrespect and becomes incredibly angry. Mei and her relatives must work together to get Ming back to her old self.</p>  <p>Eventually, all the women in Mei’s family that have hosted panda spirits find themselves in the bamboo forest. Mei discovers her mother crying on the forest floor, though she appears to be a teenager. As Mei asks why she is crying, the audience gets a glimpse of how Ming stood up to her own mother and took it too far. Taking her mother’s hand, Mei walks her to the portal where the rest of their family is gathered. Everyone makes their way through the portal, and Ming begs Mei to do the same. But Mei stands her ground, which eventually earns Ming’s pride. </p>  <h4>Final Thoughts</h4> <p>Truly, ‘Turning Red’ is a story of a collaboration between friends and family that details the journey of recovering from generational trauma in a simple and accessible manner. This story allows kids and adults alike to discover what it means to break out of unrealistic expectations and start working towards the things that actually matter to them. By showing a physical representation of what it’s like to rid yourself of what makes you unique for the sake of abiding by others’ wishes, ‘Turning Red’ teaches its audience to have empathy for those that might not fit their own standards. This movie truly allows us to learn how to be gentle with ourselves and those in our care, as well as teach us how to stand up for our own best interests. </p> <p>There is a lot to learn from the story of this big red panda. Friendship, family, personal development, and even healthy boundaries are covered in this film. So if you’ve ever needed a push to break a cycle of complacency and stand up for your own identity, this might be just it. </p>  <h4>Cast and Crew</h4> <p><b>Starring:</b> Sandra Oh, Rosalie Chiang, Ava Morse, Maitreyi Ramakrishnan, Orion Lee</p>  <p><b>Director:</b> Domee Shi | <b>Screenwriters:</b> Domee Shi, Julia Cho, Sarah Streicher| <b>Cinematography:</b> Mahyar Abousaeedi, Jonathan Pytko</p>  <b>By Micha Jones</b>`,
  },
];