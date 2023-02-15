const text = [
  "There better be a naked cheerleader under your bed!",

  "What the hell kind of country is this where I can only hate a man if he’s white?",

  "Bobby, I didn’t think I’d ever need to tell you this, but I would be a bad parent if I didn’t. Soccer was invented by European ladies to keep them busy while their husbands did the cooking.",

  "Why would anyone smoke weed when they could just mow a lawn?",

  "I don’t have an anger problem, I have an idiot problem!",

  "Your heart is telling you? Who’s the boss, you or your heart? You are! Your heart is your employee! So get your heart off its butt and back to work!",

  "You know Kahn, we may deny our kids completely different deserts, but they both go to bed hungry, and that’s what really matters.",

  "There’s something missing, something wrong—it’s like a pretty girl with short hair.",

  "Dallas? I don’t want you going to Dallas at all! That place is crawling with crackheads and debutantes, and half of them play for the Cowboys.",

  "So, are you Chinese or Japanese?",

  "I’m doped out of my gourd!",

  "That’s not the right sort of attitude for you to have. Whatever you do, you should do right, even if it’s something wrong.",

  "Can’t you see you’re not making Christianity any better? You’re just making rock and roll worse.",

  "Bobby, if you weren’t my son, I’d hug you.",

  "Mister, I have not begun to project my anger onto you!",

  "Ah, jeez. I think I need one of those $8 beers.",

  "Maybe I should tie the long hair on your head to the short hair on your ass, and kick you down the street!",

  "They weren’t dancing like you and I used to, Peggy. They were enjoying it.",

  "No Hon, just more of you to love.",

  "Bobby, Al Yankovic blew his brains out in the late 80s after people stopped buying his records. He’s not worth getting in trouble over.",

  "I have a sense of humor. I laugh at Tony Danza.",

  "Dale’s losing it at Mega Lo Mart, Nancy. We need some traps for the rat, and a tranquillizer gun for…uh…also for the rat.",

  "Bwaaah!",

  "I am the mack daddy of Heimlich County!",

  "What? No, I sell propane!",

  "I wasn’t flirting with her. I didn’t even mention that I work in propane!",

  "When I grow up, I want to sell propane and propane accessories, if my grades are good enough!",

  "The only woman I’m pimping from now on is Sweet Lady Propane. And I’m tricking her out all over this town.",

  "Now you listen to me, mister. I work for a livin’, and I mean real work, not writin’ down gobbledegook! I provide the people of this community with propane and propane accessories. Oh, when I think of all my hard-earned tax dollars goin’ to pay a bunch of little twig-boy bureaucrats like you, it just makes me wanna—oh, oh God.",

  "But that shouldn’t stop you from pursuing your own dreams of wood, plywood, pressed fiberboard, and if you’ve got the talent, metal! Y’see, shop doesn’t have to happen in any special place—as long as it’s well lit, and the outlets are grounded. Because the shop is bigger than any classroom, or garage, or stupid policy that makes tools illegal—it’s in our hearts.",

  "Bobby, some things are like a tire fire—trying to put it out only makes it worse. You just gotta grab a beer and let it burn.",

  "Eight feet huh? Yeah, you see Khan, in this neighborhood, side fences have to be 5’6’’ or under. It’s not in the code or anything, it’s just something I’m trying to enforce.",

  "Bobby, you can’t make an omelette without breakin’ eggs, and you can’t get on base without takin’ a swing.",

  "I had to raise a lot of hell in there but sometimes that’s what you gotta do to get the right paperwork.",

  "You shut your got-dang mouth or I’ll shove that Ditch Witch down your throat and dig a tunnel straight through to sunshine!",

  "He thinks just ’cause I’m from Texas that means I’m a redneck—Chinese people and their stupid stereotypes!",

  "Let me tell you, Bobby, there’s nothing funny about these sounds! What that person on your tape has is a medical disorder. Now you get ready for the game, okay?",

  "God dang it, Bobby!",

  "Put your head between your six legs and kiss your butt goodbye!",

  "You’re a regular Halloween hellraiser just like your old man. And I’m very disappointed in you!",

  "Dang it, I am sick and tired of everyone’s asinine ideas about me. I’m not a redneck, and I’m not some Hollywood jerk. I’m something else entirely. I’m complicated!",

  "That’s a clean-burning hell, I tell you what!",

  "Suffering is a part of every religion, Peggy. I mean, look at what the Jews have been through, and you never hear them complaining.",

  "Dale, that’s asinine, and here are the four reasons why. First, you’re not gonna clone a super-warrior out of a guy who can’t even win a thumb-wrestling match. Two, you’ve spent your life swearing that the robots will eliminate the clones by the year 2010. So which is it, robots or clones? Three, you’ve already said you sympathize with the invading Mongolians of 2087, so you’d be the last one they’d send to fight them. And four, if you were from the future, you would have seen this coming.",

  "Don’t play lawyer-ball, son.",

  "You do not use a man’s hitting wedge to hit the mud, Bobby!",

  "An ‘F’ in English? Bobby, you speak English!",

  "Don’t play mind checkers with me, man. I’m not in the mood.",

  "Peggy, go get my BC headache powder and a glass of water.",

  "I sell popcorn and popcorn accessories.",

  "No, you are not tripping. That is an emu.",

  "Fine. But I think you owe my lawn an apology.",

  "For God’s sake, Bobby, what nationality are you?",

  "Hank Hill, best man, Strickland Propane.",

  "Well, why not? I like this new generation of music.",

  "Mother of God, it’s all toilet sounds! Where did you record this?",

  "Hey Khan. I thought I heard someone mixing concrete.",

  "Now what’s that supposed to mean?",

  "Well, that boy’s gonna get a talking to, I tell ya what!",

  "6 AM, and already the boy ain’t right!",

  "You know, Helen Keller was largely useless, but look how we remember her. Yep, the first lady of the American stage.",

  "How is cutting down on pollution a government plot, Dale?",

  "Why are you holding your cigarette like some kind of European Nazi in a movie?",

  "This grout is supposed to stay white for twenty years. What’s it been, seventeen, eighteen? Peggy, where’s that receipt?",

  "Well, she’s got a point, but he’s a war hero. She’s my wife, but he’s got no shins.",

  "Dale, you giblet-head, we live in Texas. It’s already 110° in the summer, and if it gets one degree hotter, I’m gonna kick your ass!",

  "So you found yourself a project. Do you get the same, uh, high I get from lawn care?",

  "We, of the Order of the Straight Arrow, call upon the spirit Wematanye, protector of the sacred ground that brings us cool water to drink and energy-efficient, clean-burning propane gas for all our sacred heating and cooking needs. Wematanye says, ‘respect the earth!’ She’s ours, by God, our taxes pay for Her. Also, it says here you gotta love all Her creatures. Let’s see…oh, here we go: Though we walk through the valley of the shadow of death, you’re gonna recommend us to the spirit in the sky, with liberty and justice for all. Wematanye is with you, and with Texas. Amen.",

  "It’s a combat bowl. Bobby made one too.",

  "It’s different in high school, Peggy. Bullies react to Shakespeare like, well, like propane-emulsifiers react to carbon deposits. I can’t put it any plainer than that.",

  "Fine. But I think you owe my lawn an apology. *pauses* We’re waiting!",

  "So you found yourself a project. Do you get the same, uh, high I get from lawn care?",

  "Head to feet, you don't cause a leak. Feet to head, everyone's dead.",

  "We will be disrupting a Chuck Mangione concert with kazoos.",

  "That's a neat idea, Luanne. And while you're at it, you can fly around the world in a weather balloon.",

  "Newsweek? Not in this house.",

  "Aisle 8A. Boy, we sure are a long way from automotive.",

  "You know, the special time in girls' lives, and the freshness and all that.",

  "Poor Connie? Poor me! I had to learn about Megalobsorbancy.",

  "But Carl, shop is the foundation of all learning. And I tell you what, a youngster with a tool in both hands has no hands left to do drugs.",

  "Damn zero-tolerance. Using a saw as a weapon makes about as much sense as using a gun to cut a two-by-four.",

  "I'd like to see your teacher give an F to the U.S. of A.",

  "Mr. Meredith, I have admired you from your playing days to Monday Night Football to your iced tea commercials.",

  "A dog's the only animal that makes sense. And I suppose a cat might work, you know, if you're a little girl or an old lady who's sick.",

  "Your first concussion. Now, don't fall asleep, son, both because you could die and because I want to tell you how proud I am. I mean, look at you, the bruises, the dirty clothes, the smell -- you're all right. Is there anything I can get you?",

  "A circus clown is just a carny who's too stupid to flip a ride switch on and off. Now, you take a circus clown, roll him on the barn floor, kick him in the head a couple hundred times, and what have you got?",

  "I haven't heard the words prop comic since he picked up a rope. And it keeps him away from the video games. I caught him playing this Tomb Raider game where he was a girl!",

  "Hey, how about the time we snuck into the stadium and mowed the whole field before the groundskeeper could? The look on his face right before we apologized!",

  " As a young boy, I always dreamed of winning the Super Bowl. Then, as most of you know, that dream was crushed along with my ankle in the Class 2A State Football Championship. I knocked around for a while, sowed my oats, got a job at Jeans West. Long story short, one day at JW, I sold a pair of Jordache to a man who would change my life. To quote Dr. Luther King, I had another dream: to sell propane and propane accessories. The name of the man and the dealership: Strickland",

  "You see, Luanne, a lot of good things happened in the world when people were like me. Sure, they'll never write a Hollywood musical about a fella who keeps his yard free of debris and pays his bills on time, and the MTV won't put on a video about a man who requires shoes in the kitchen, but it's because of people like us",

  "Representative Jim Powell thinks your problem and flag-burning are among the biggest problems facing America today. That's why Jim Powell has introduced House Resolution number 11461. It would ban flag-burning in all... Aw, he never even read it. I'd go see him in person, but no self-respecting bus company would let me on with hair like this.",

  "When he came back from the Pacific, he was five foot even. A Japanese machine gun blew away his shins. The doctor said he'd never walk again. Eighteen months later, my father walked right over to that doctor, reached up, and punched him in the kidneys. Now, I can't prove what he did at those battles. In fact, I'm not even sure if the part about hitting the doctor is true. But I do know this: my father doesn't have shins, and somehow he walks. And that's pretty heroic to me. And that's what I was muttering.",

  "It's gonna take a lot of hard work to repair this floor, and since this is all your fault, Mister, I'm not gonna let you help me.",

  "Tae Bo, is that that new oriental way of moving your couch around?",

  "Look, Luanne, I fought at the Y and trust me, you are no boxer.",

  "Dang it, Boomhauer. Just because the Cowboys have a bad season or two or five doesn't give you the right to abandon them. Right, guys?",

  "Oh, god! Debbie's hippie roommate turned me in for smokin' narcotics!",

  "Bobby, you name a pet, you name a guitar, but you do not name a filthy animal!",

  "Eight feet huh? Yeah, you see Khan, in this neighborhood, side fences have to be 5'6 or under. It's not in the code or anything, it's just something I'm trying to enforce.",

  "I made it to Eagle Scout. And Dad, you know the war was over. Besides, I tried to enlist, but the army felt I wouldn't be able to relieve myself efficiently under duress, especially in front of others.",

  "You've got what they call book smarts. Now, if we wanted to write a story about you losing our money, well, hands down, you're the one for the job. But if we want to do something that takes street smarts, like getting our money back from the jerk who stole it, then I'm the guy.",

  "I didn't marry you because I need someone to cook and clean for me. I married you because... you know... you know... the love.",

  "And a notch up from the Wagner Char-King Superiore is the Wagner Char-King Imperiale. Wagner's a fantastic company. They're based out of El Paso, so they've got American ingenuity and Texas craftsmanship built right in.",

  "God was punishing me for being prideful. He didn't give me a fatal heart attack because he wanted me to sell propane, but he made his point.",

  "Where have you been? I've had to deal with the Bluegrass Brothers all by myself. They've been staring at me, twiddling their beards, trying to psych me out.",

  "It's your fault I was born in New York and I can't drive my truck and I tried a bagel and actually liked it. No, no more lies -- I loved that bagel!",

  "He's probably camped out in the bushes. No, that takes guts. He probably spent the night at Denny's.",

  "1.6 gallons per flush per low-flow toilet. Sounds pretty good, doesn't it? But unfortunately, in the real world, where things don't flush the way they do in the movies, it can take three, four, or in the case of my wife Peggy Hill, six flushes to get completely remove solid waste. The fact is, these toilets are squandering more water than they are saving. Thank you.",

  "Bobby, I know it's not good when a girl breaks your heart. It's only natural to be sad. But the couch is a happy place.",

  "Bobby, vegetarians can't be trusted. Just last week we caught one siphoning gas out of a company truck.",

  "Bill, I'm taking you to the one place that can fix whatever you've got going on inside you. You know, the despair and whatnot.",

  "When I was your age, we had these things called songs. They were two-minute stories about falling in love or burning down Georgia. But I guess Hollywood decided we needed more criminals yelling about their lady friends'... baby-places.",

  "I've been your friend for twenty-five years. Who talked you out of buying the houseboat? Who kept you from killing yourself after Lenore left you? Who listens to you for hours after you've had a nightmare?",

  "The Liberty Bell is great. But come on, if it was in a competition with a bunch of other bells without cracks, it would lose",

  "Yep, those were some good times. Bobby'd tell me something about comedy, and then I'd teach him a little bit about propane. You know that bit where he'd say Propane is 270 times more compact in its liquid form than as a gas? I gave him that line. But he sure knew how to deliver it.",

  "Sure, the Char-King 1000 is an excellent starter grill, but the 2000 gives you expanded patty capacity. Don't you want that kind of security?",

  "I'm not a bad guy. I'm just a guy who's bad at being a good guy.",

  "There's soot under my boy's nails. You don't get that from a clean-burning fuel.",

  "I still can't believe Bobby cheated on his paper route. I don't even know know how to punish that.",

  "By never forgetting this lesson. Sneaking into the movies is wrong. As wrong as spilling juice on a new carpet.",

  "All right, you got me: I'm not a dork, I sell propane.",

  "Look, all I know about him is that he likes blue pens and staples horizontally. And that's all I should know.",

  "I just want you to know that whatever you decide, it's none of my business.",

  "Well, all right! That's a great way to serve our country: supporting our enlisted men, one dog at a time.",

  "Bobby, looks like I'm free this Friday if you want to see that Hilary Duff movie.",

  "Hello. Mr. Winkler here would like you to know that it was always his intention to let the Platters' cattle use his trail. Because cattle, like jazz music, feeds the soul of America. And that if all the leaders of the world would just fish together, the planet would live in harmony.",

  "Now, I'm not gonna mention any names, but due to last years unfortunate kissing incident, mistletoe is banned from this years Christmas party.",

  "Well, they are in different conferences, so it would only be a problem if they played in the Super Bowl. An all-Texas Super Bowl! His will be done!",

  "I guess I am the best man, and with the joy of responsibility comes the burden of obligation.",

  "Come on , guys. Keep it together. You're acting like a bunch of 12-year-olds. This is a real sporting event. I saw it on ESPN3. That's where they parked poor Fran Tarkenton.",

  "We don't fish for the fish. Ninety percent of what I like about this sport -- and it is a sport -- is sitting in the boat doing nothing. And the icing on the cake is when God smiles on you and you hook one. And then when you're reeling it in, everything else falls away. You don't think about taxes or traffic or that pushy gal that's trying to get into the Citadel or who's going to take care of you when your mother and I are old and incapacitated. All there is is a man, a rod, a lake and a fish. And it all starts with a hand-dug American worm.",

  "Tell you what, if you play some catch with your old man, I'll buy you that album you want by those guys I hate.",

  "Bobby, I know you're probably pretty upset with me right now, but one day you'll understand how much love it takes to crush a little boy's dream.",

  "Eatwells? Sugar-free low-fat fun bars? Peggy, these aren't for trick-or-treaters, they're for diabetics.",

  "Good news, Buck. We can get propane to the nursing homes by diverting it away from the Museum of Modern Art. If anyone asks, it was a tough choice.",

  "People are still talking about Super Bowl 23 -- Boomhauer's dip was so thick, the chips were snapping like Joe Theisman's birdy leg.",

  "Bobby, if you give a Valentine to a sixth-grade boy, girls are gonna think you're sensitive. And something like that can follow you the rest of your life.",

  " If you're looking for a real job, you ought to consider a career in propane. You know, this whole humor fad is pretty much on the way out.",

  "You don't have to be embarrassed about your feet, Bill, it's just a medical condition.",

  "Bobby, how would you like to help me out around the shop for a few days? I can't pay you, but you can have all the snacks you want. We've got fruit pies, pretzels, all kinds of Newtons...",

  "Bobby, I know we've never talked about this, but someday I'm going to die. And when that happens, then you can go to cooking school.",

  "I know we can never compete with Mega Lo Mart's prices, but I thought we could get a spokesperson, the way Mega Lo Mart cashes in on Chuck Mangione's star power. Now, I've been doing some research on this Zamfir fella, and turns out he's sold more albums worldwide than the Beatles. His music's better too.",

  "My mower is not too old and my Mom was not too old. But this isn't about my Mom and it certainly isn't about my mower. It's about a bitter old man who blames everybody but himself for his own problems. And if you ever talk like that again about my Mom or my mower, you're not welcome in my house.",
  
  "I thought I'd take my boy to see that new space movie. I hear its got special effects.",
  
  "Oh God I'm talking to myself, it must be a side-effect of the Marijuana poisoning",
  
  "I can’t believe I lied to my boss. I should’ve just done the honest thing and murdered the emus",
  
  "You’re calling me weak! Look at your little bird arms, there no thicker than a cigarette! I can smoke them little arms.",
  
  "Dale, you giblet head. We live in Texas. It's already 110 degrees in the summer and if it gets one degree hotter I'm kicking your ass.",
  
  "Do I look like I know what a jpeg is I just want a picture of a god dang hot dog",
  
  "You know what’s not cool Bobby? Hell.",
  
  "He asked if I wanted honey mustard and I nearly took a swing at him",
  
  "I've got a sense of humor; I laugh at Tony Danza.",
  
  "It's a fact of life Bobby. When you have teenaged boys, husky boys, and doughnuts all in the same place you're just asking for trouble.",
  
  "Oh my God...his handshake...it's LIMP!",

  "Firm but with a little give. Yup, these are medium-rare.",

  "I told you about the time I put on the gigantic pair of khakis and pretended I was tiny. I was very upfront about it.",

  "From now on there is only one woman I will pimp, sweet lady propane.",

  "You see, I'd always thought of propane as a dignified lady. But she can also be a dirty girl.",

  "Ginseng? I don't need to get all hopped-up on dope!",

  "Forty-five dollars? The family bible didn't even cost that much, and it was written by Jesus.",

  "I can't just leave work five minutes early on a Friday, Bobby.",

  "We better get that second coat of paint on before Bobby puts back that poster of babies dressed as strawberries."
];
