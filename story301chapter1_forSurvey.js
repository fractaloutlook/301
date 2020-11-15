var storyContent = ﻿{"inkVersion":19,"root":[["^<center>______________________________________________________","\n","^<center><b>301 HOPE ST.</b></center>","\n","^<center>______________________________________________________","\n","^<center>Genres: <i>Urban Drama, Romance, Intrigue</i></center>","\n","^<center>\"Move-in day in a new apartment. New friendships. New romances. New...strangeness\"</center>","\n","^<center>______________________________________________________","\n","^<b>Chapter 1: Moving Day</b>","\n","^Our main character sits in the back of an Uber. Judging by the bags and boxes around her, it's moving day.","\n","^...: The sounds of the city pour through the open window of the car. The afternoon sun kisses your face. It’s a good day to start something new. ",{"#":"Narrator"},"\n","^...: Before we get started, what was your most recent partner's name? ",{"#":"Narrator"},"\n","ev","str","^Marc","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Roxanne","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["^ ","\n","^...: That's right. Marc. Not everything works out, sadly. ",{"#":"Narrator"},"\n",{"->":"EP1ChoicePre"},{"->":"0.g-0"},{"#f":5}],"c-1":["^ ","\n","^...: Yes. Roxanne. Those were some good times. And bad times, unfortunately. ",{"#":"Narrator"},"\n",{"->":"EP1ChoicePre"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"EP1ChoicePre":["^...: Let’s get started. ",{"#":"Narrator"},"\n",{"->":"S1E1_Start"},{"#f":1}],"S1E1_Start":[["^...: The car comes to a stop outside 301 Hope Street. The Gusman Building. ",{"#":"Narrator"},"\n","^On the steps of the building, Maria is 'greeted' by the doorman, Cullen.","\n","^...: The place is fancy, even if the doorman seems like he’d rather be doing anything other than helping you. He’s got a casual way about him, despite the formal presentation. It feels like the whole world is his break room and he’s off the clock. ",{"#":"Narrator"},"\n","^Cullen: Oh, hey. Can I help you with your bags? ",{"#":"Cullen"},{"#":"Neutral"},"\n","ev","str","^I'm good... I think.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Definitely.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^What do you think?","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I’ve got it. *Urrh* No, I don’t. ",{"#":"MC"},{"#":"Grimace"},"\n",{"->":"EP1Choice1"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Appreciate it. Here you go. ",{"#":"MC"},{"#":"Relieved"},"\n",{"->":"EP1Choice1"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: No thanks. I’m training for the Summer Olympics. ",{"#":"MC"},{"#":"Annoyed"},"\n","ev",{"VAR?":"globalIrreverence"},1,"+",{"VAR=":"globalIrreverence","re":true},"/ev",{"->":"EP1Choice1"},{"#f":5}]}],{"#f":1}],"EP1Choice1":[["^Cullen: I’m Cullen. I’m the door person, but consider me your concierge. Whatever you need, I can facilitate. ",{"#":"Cullen"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Just your shoulders for the time-being. Thank you. ",{"#":"MC"},{"#":"Neutral"},"\n","^The Gusman Building Lobby","\n","^...: A slender young man, making no effort to mask his irritation, waits for Cullen at the front desk.","\n","^Nathan: Cullen, man, we gotta talk. ",{"#":"Nathan"},{"#":"Annoyed"},"\n","^Cullen: Sorry. I have to attend to... this. ",{"#":"Cullen"},{"#":"Annoyed"},"\n","^...: And just like that, your bags are your problem again. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Oh. Uh. Should I wait? Or carry this heavy stuff myself? Or... ",{"#":"MC"},{"#":"Annoyed"},"\n","^...: The lobby is impressive. High ceilings and just enough marble to remind you the building is old. The building has hints of Renaissance Revival architecture, but isn’t gaudy. ",{"#":"Narrator"},"\n","^...: The ceiling stands out as an impressive bit of design. It feels pulled entirely from a different era, but it’s difficult to guess which exactly. ",{"#":"Narrator"},"\n","^...: There’s the hint of a fresh soil smell to the place, probably from all the potted plants placed around the lobby. ",{"#":"Narrator"},"\n","^...: There’s no music playing, but there is some sound coming from the speakers built into the walls. Is it the ocean? It’s hard to make out. ",{"#":"Narrator"},"\n","^Nathan: It was supposed to be in the lobby, because it’s too big to fit in my mailbox. ",{"#":"Nathan"},"\n","^Cullen: So you said. And as I said, I haven’t received any packages today. Maybe it’s late. ",{"#":"Cullen"},{"#":"Neutral"},"\n","^Nathan: ... ",{"#":"Nathan"},{"#":"Annoyed"},"\n","^Nathan: Maybe. ",{"#":"Nathan"},{"#":"Neutral"},"\n","^Nathan: Would you be uncomfortable if I looked around? ",{"#":"Nathan"},{"#":"Neutral"},"\n","^Cullen: Why would I be uncomfortable? ",{"#":"Cullen"},{"#":"Neutral"},"\n","^Nathan: Good. ",{"#":"Nathan"},{"#":"Neutral"},"\n","^Nathan approaches you.","\n","^...: He’s wearing quite a bit of cologne. The basenote of the fragrance is definitely citrus. ",{"#":"Narrator"},"\n","^...: He’s undeniably attractive. His energy is younger than his outward appearance, giving the impression that adulthood is something he's actively avoiding. ",{"#":"Narrator"},"\n","^Nathan: Moving in? ",{"#":"Nathan"},{"#":"Smile"},"\n","ev","str","^Duh.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Yeah. Hi.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^You're very observant.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: What makes you say that? ",{"#":"MC"},{"#":"Smirk"},"\n",{"->":"EP1Choice2"},{"#f":5}],"c-1":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I am. Hello, neighbor. ",{"#":"MC"},{"#":"Smile"},"\n","ev",{"VAR?":"globalWarmth"},1,"+",{"VAR=":"globalWarmth","re":true},"/ev",{"->":"EP1Choice2"},{"#f":5}],"c-2":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: No fooling you. ",{"#":"MC"},{"#":"Neutral"},"\n",{"->":"EP1Choice2"},{"#f":5}]}],{"#f":1}],"EP1Choice2":[["^Nathan: It’s a fun building. Lots of cool people. Lots of hot people. ",{"#":"Nathan"},{"#":"Flirty"},"\n","ev","str","^What did you just say?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Alright.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^You're a little forward, huh?","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Excuse me? ",{"#":"MC"},{"#":"Skeptical"},"\n",{"->":"EP1Choice3"},{"#f":5}],"c-1":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Good to hear. ",{"#":"MC"},{"#":"Neutral"},"\n",{"->":"EP1Choice3"},{"#f":5}],"c-2":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I look forward to meeting one. ",{"#":"MC"},{"#":"Smirk"},"\n",{"->":"EP1Choice3"},{"#f":5}]}],{"#f":1}],"EP1Choice3":[["^Nathan: Look, it can be lonely being in a new space all by yourself. I’m around... if you need someone to talk to or whatever. ",{"#":"Nathan"},{"#":"Flirty"},"\n","ev","str","^Sounds like a bad idea.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Nice of you to offer.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^You're really confused, huh?","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Why would I invite a stranger into my place? ",{"#":"MC"},{"#":"Annoyed"},"\n","^Nathan: ... ",{"#":"Nathan"},{"#":"Annoyed"},"\n",{"->":"EP1Choice4"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: What a truly kind offer. ",{"#":"MC"},{"#":"Neutral"},"\n","ev",{"VAR?":"relationshipNathan"},1,"+",{"VAR=":"relationshipNathan","re":true},"/ev",{"->":"EP1Choice4"},{"#f":5}],"c-2":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I love the fact that you aren’t joking. It’s adorable. ",{"#":"MC"},{"#":"Smirk"},"\n",{"->":"EP1Choice4"},"^Nathan: That offer is open. Just let me know. ",{"#":"Nathan"},{"#":"Smile"},"\n",{"#f":5}]}],{"#f":1}],"EP1Choice4":[["^...: He returns to hassling Cullen. Whatever he’s waiting for must be really important, because he’s not letting up. ",{"#":"Narrator"},"\n","^The Gusman Building Elevator","\n","^...: A woman with a laid back, almost shy, way about her is already in the elevator. ",{"#":"Narrator"},"\n","^...: The elevator maintains some of the ornate beauty of the lobby but was clearly built more recently. It has modern lighting and the button panel is digital. ",{"#":"Narrator"},"\n","^Blaire: What floor? ",{"#":"Blaire"},{"#":"Shy Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Oh. Uh. Fifteen. Sorry, forgot for a second there. Hectic day. ",{"#":"MC"},{"#":"Smile"},"\n","^...: She’s sloppily dressed, but all the clothes are high-end. It gives the impression that she has taste but not enough time in her day to think about her appearance. ",{"#":"Narrator"},"\n","^...: Or maybe she just never learned how to put a look together. The effect is comforting, in a way. Like a memory of a teacher from grade school. ",{"#":"Narrator"},"\n","^Blaire: I’m on fifteen too. Judging by all this... stuff, you’re moving in today? ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I am. Nice to meet you, I’m ","ev",{"VAR?":"globalPlayerName"},"out","/ev","^. ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: Blaire. Can I? ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Oh, no. That’s ok. I’ve got it. ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: Really? ",{"#":"Blaire"},{"#":"Amused"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Maybe not. Thank you. ",{"#":"MC"},{"#":"Thankful"},"\n","^...: Blaire takes some of the boxes. She’s stronger than she looks. ",{"#":"Narrator"},"\n","^Blaire: The door guy, Cullen, he’s ok if you’re quick to tip. Otherwise... ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Yeah, I got that memo when he left me at the front desk with all these boxes. ",{"#":"MC"},{"#":"Amused"},"\n","^Blaire: Staff leaves something to be desired, but the tenants are great. I’m pretty new myself, but everyone has been so friendly. ",{"#":"Blaire"},{"#":"Smile"},"\n","^...: The elevator stops in a motion so smooth you barely feel it. The door opens. Fifteenth floor. ",{"#":"Narrator"},"\n","^Fifteenth Floor Hallway","\n","^...: The hallway is entirely more modern than the lobby. Which makes sense. The original building was likely four-stories or less, so the floors this high could’ve been built a hundred years after the foundation. ",{"#":"Narrator"},"\n","^...: The design on the carpet has a slight hypnotic effect, and feels as if you can step into it. ",{"#":"Narrator"},"\n","^...: Someone is cooking. It’s a smell you recognize, but you can’t quite put your finger on it. Vietnamese food, perhaps? The air feels a few degrees cooler than the rest of the building. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: You’re sure you don’t mind? ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: It’s no problem. Everybody needs a hand sometime. ",{"#":"Blaire"},{"#":"Smile"},"\n","^...: Blaire follows you, still carrying the boxes. She seems happy just to be around someone. She comes off like a true people-pleaser, but without any ulterior motive. ",{"#":"Narrator"},"\n","^...: Maybe she’s just as nice as she seems. ",{"#":"Narrator"},"\n","^...: End of the hallway. Your apartment door on the left. ",{"#":"Narrator"},"\n","^...: You both put the boxes on the floor as you fumble for your keys... ",{"#":"Narrator"},"\n","^...: ...And then something catches your eye. ",{"#":"Narrator"},"\n","^...: Directly in front of you, a framed painting. It’s ominous, but something about it draws you in. ",{"#":"Narrator"},"\n","^...: Paint was applied in such volume that every part of the image has a raised texture. Something about the depiction -a small boat approaching an intimidating island- feels familiar. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: This is an odd decorative choice. ",{"#":"MC"},{"#":"Confused"},"\n","^Blaire: Isle of the Dead. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Say again? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: It’s called Isle of the Dead. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: It looks really familiar. Is it famous? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: The original is. The artist did a half-dozen versions of the same image. People kept paying for them so he kept painting them. ",{"#":"Blaire"},{"#":"Smile"},"\n","^Blaire: Later on, prints of the paintings were really popular. Especially in Europe. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Do you know a lot about art? ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: Art history was my undergrad. So, only as much as I can recollect from those days. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I can see the paint built up on the canvas. It’s not a print. ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: No. It’s a recreation. Someone put a lot of work into aping the original. But whoever did this has a much heavier brush than Böcklin. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Most apartment buildings are decorated with photos of the neighborhood or paintings of sunflowers. ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: The Gusman isn’t like most buildings. I don’t know if you caught it on your way in, but the lobby ceiling has a depiction of Apollo that is genuinely weird. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I must have missed it. I'm not complaining, but why exactly is the place so odd looking? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: I tried a web search for information. There’s a local historian who says it belonged to a fraternal order and was paid for with gold rush money. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev","str","^Tell me more...","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Wow. I'm impressed by you.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Frats, huh? Gross.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: What order would that be? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: It’s all a bit mysterious. Something about prospectors who wanted to start their own nation out here. Wild stuff. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalFocus"},1,"+",{"VAR=":"globalFocus","re":true},"/ev",{"->":"EP1Choice5"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: You have a very curious mind. That’s a great quality. ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: That’s really nice of you to say. I think I just like talking to you. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"relationshipBlaire"},1,"+",{"VAR=":"relationshipBlaire","re":true},"/ev","ev",{"VAR?":"globalWarmth"},1,"+",{"VAR=":"globalWarmth","re":true},"/ev","ev",1,"/ev",{"VAR=":"romanceBlaire","re":true},{"->":"EP1Choice5"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I hated the frats in college. Really entitled group of jerks. ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: Oh, don’t I know it. My campus was infested with frat guys. Glad I spent most of my time in the library. ",{"#":"Blaire"},{"#":"Smile"},"\n",{"->":"EP1Choice5"},{"#f":5}]}],{"#f":1}],"EP1Choice5":[["^...: A quiet moment passes as you both reflect on the Isle of the Dead. It's undeniably evocative and invites speculation. Definitely a strange choice for a residential building. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: What about the newer stuff? Like this painting? Who makes these decisions? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: The building manager doesn’t seem like he’d have an aesthetic sense of any kind. Maybe they hired an interior designer. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Maybe. Do you like it? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: The painting? Sure. It is a little strange, but it’s got character. So many of my friends live in condo buildings that look like hotels. ",{"#":"Blaire"},{"#":"Neutral"},"\n","^Blaire: Or, worse yet, dorms. Isle of the Dead might be spooky, but it’s at least a bit different. ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Hm. Well, no debate there. Different for sure. ",{"#":"MC"},{"#":"Amused"},"\n","^Blaire: You’ve seen your place, right? ",{"#":"Blaire"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Just for a few minutes. I didn’t expect to get it, so I tried not to fall in love. ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: I had the same feeling! Never thought I’d land an apartment here with my credit. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Glad to hear I’m not alone in that. I’m a financial analyst. The money’s good, but... I’ll be paying off college debts forever. ",{"#":"MC"},{"#":"Amused"},"\n","^Blaire: Oh I’m a bit worse off. I’m in grad school for the second time. So debt has become an abstract concept at this point. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: In some ways it's an abstract concept, period. Just numbers being shifted around. But it can be scary. ",{"#":"MC"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I'm trying to be smarter about money. I bought some of the previous tenant's furniture and don't even remember what it looks like. But it saved me on moving costs. ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: I never met the person who lived here, but most of the floor is young and hip. So I bet the furniture is nice. ",{"#":"Blaire"},{"#":"Smile"},"\n","^...: Another silent moment between two people balancing politeness and curiosity. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: You live alone? ",{"#":"MC"},{"#":"Questioning"},"\n","^Blaire: Yeah. I think we’re all single on this floor. So it’s a bit of meat market at times. The flirting never stops. ",{"#":"Blaire"},{"#":"Amused"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I noticed that with the cologne-soaked guy downstairs. ",{"#":"MC"},{"#":"Amused"},"\n","^Blaire: Nathan. Yeah, he’s a bit much. ",{"#":"Blaire"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I’ve been out of the game for a long time. This is my first place of my own, post-breakup. ",{"#":"MC"},{"#":"Neutral"},"\n","^Blaire: Don’t let the locals know. They’ll assume you’re on the prowl. ",{"#":"Blaire"},{"#":"Laughter"},"\n","ev","str","^I've been known to prowl.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Hm. I see.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Tell me more.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Maybe I am! ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: Kevin is handsome but I’m not sure there’s a lot going on upstairs. ",{"#":"Blaire"},{"#":"Amused"},"\n","^Blaire: Sophia... she’s the upscale version of Nathan. Very into herself. ",{"#":"Blaire"},{"#":"Amused"},"\n","^Blaire: Rashawn seems nice but there’s something off about him. Good looking for sure though. ",{"#":"Blaire"},{"#":"Amused"},"\n",{"->":"EP1Choice6"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: That’s good to know. I don’t want any misunderstandings. ",{"#":"MC"},{"#":"Neutral"},"\n",{"->":"EP1Choice6"},{"#f":5}],"c-2":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Are any of them hot? ",{"#":"MC"},{"#":"Smirk"},"\n","^Blaire: Kevin is handsome but I’m not sure there’s a lot going on upstairs. ",{"#":"Blaire"},{"#":"Amused"},"\n","^Blaire: Sophia... she’s the upscale version of Nathan. Very into herself. ",{"#":"Blaire"},{"#":"Amused"},"\n","^Rashawn seems nice but there’s something off about him. Good looking for sure though. ",{"#":"Blaire"},{"#":"Amused"},"\n","ev",{"VAR?":"globalIrreverence"},1,"+",{"VAR=":"globalIrreverence","re":true},"/ev",{"->":"EP1Choice6"},"^Blaire: You’ll thrive here. It’s a great place. Let me know if you need anything. ",{"#":"Blaire"},{"#":"Smile"},"\n",{"#f":5}]}],{"#f":1}],"EP1Choice6":[["ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Thanks! ",{"#":"MC"},{"#":"Smile"},"\n","^Blaire: I'll let you settle in. If you need anything, I'm down the hall. ",{"#":"Blaire"},{"#":"Smile"},"\n","^...: All alone now. Time to open the apartment door and start this new life of yours. ",{"#":"Narrator"},"\n","^Your Apartment","\n","^...: The apartment is bare. But in this moment, its potential seems limitless. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: This really is a nice space. Now I just have to make it mine. ",{"#":"MC"},{"#":"Smile"},"\n","^...: You begin to unpack and pull a framed photo from a box.","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Oh. ",{"#":"MC"},{"#":"Sad"},"\n","^...: A photo of a couple. Your ex and you. Happy. Not that long ago, in the scheme of things. ",{"#":"Narrator"},"\n","^...: Memories rush into your mind like broken pipes flooding a basement. You’d like to push these feelings off, but there’s no escaping the past. ",{"#":"Narrator"},"\n","^...: You had a nice time, then a less nice time, then a time that wasn’t very nice at all. ",{"#":"Narrator"},"\n","^...: Your relationship  was born, thrived, grew old, and died. And now you’re left with photos and an occasional knot in your stomach. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I really don’t need to hang this on the wall if I’m starting a new life. ",{"#":"MC"},{"#":"Sad"},"\n","ev","str","^Toss it in the trash.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Place it under a few books.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: After all, the past is the past. ",{"#":"MC"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalFocus"},1,"+",{"VAR=":"globalFocus","re":true},"/ev",{"->":"EP1Choice7"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: But I don’t feel right throwing it out just yet. ",{"#":"MC"},{"#":"Sad"},"\n","ev",{"VAR?":"globalWarmth"},1,"+",{"VAR=":"globalWarmth","re":true},"/ev",{"->":"EP1Choice7"},{"#f":5}]}],{"#f":1}],"EP1Choice7":[["^...: KNOCK. KNOCK. ",{"#":"Narrator"},"\n","^Your Apartment - Doorway","\n","^...: Upon opening the door, you find a beefcake in surprisingly stylish gym clothes. ",{"#":"Narrator"},"\n","^...: He’s got a strong build and his body language is confident. Some might say over-confident. ",{"#":"Narrator"},"\n","^...: He’s handsome but it borders on a newscaster style of beauty, where everything is correct but nothing connects. His smile feels like a scope aimed directly at you. ",{"#":"Narrator"},"\n","^...: He's holding a paper plate. An offering of sorts. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Hi? ",{"#":"MC"},{"#":"Confused"},"\n","^Kevin: Welcoming committee. I baked you some cookies. ",{"#":"Kevin"},{"#":"Smirk"},"\n","^...: It’s a single Oreo-style cookie. ",{"#":"Narrator"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Oh. That’s very kind of you. ",{"#":"MC"},{"#":"Skeptical"},"\n","^Kevin: Kidding. I don’t bake! I’m Kevin. Welcome to the Gusman Building. ",{"#":"Kevin"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I’m ","ev",{"VAR?":"globalPlayerName"},"out","/ev","^. Really good to meet you, Kevin. Thanks for the, uh, cookie. ",{"#":"MC"},{"#":"Amused"},"\n","^Kevin: Practice moderation when it comes to sugar. It’s the silent killer. ",{"#":"Kevin"},{"#":"Neutral"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: That’s what they say. ",{"#":"MC"},{"#":"Amused"},"\n","^Kevin: I’m one of them! I’m a personal trainer. Nutrition is just part of it. Exercise clearly is big too. ",{"#":"Kevin"},{"#":"Smile"},"\n","^Kevin: But people forget about mindset. It’s the cornerstone. I make it all part of the plan. After all, ‘My business is your health.’ ",{"#":"Kevin"},{"#":"Smile"},"\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Quite a company motto. ",{"#":"MC"},{"#":"Amused"},"\n","^Kevin: Thanks. You look pretty healthy to me. Great shape. How many days are you in the gym? ",{"#":"Kevin"},{"#":"Questioning"},"\n","ev","str","^You're bold, huh?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^It varies.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^So often, you can't even imagine.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: Not really your concern, Kevin. ",{"#":"MC"},{"#":"Annoyed"},"\n",{"->":"EP1Choice8"},{"#f":5}],"c-1":["^ ","\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: I shoot for three. Land at one. I’m pretty busy with work. ",{"#":"MC"},{"#":"Neutral"},"\n","ev",{"VAR?":"relationshipKevin"},1,"+",{"VAR=":"relationshipKevin","re":true},"/ev",{"->":"EP1Choice8"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"globalPlayerName"},"out","/ev","^: My body is really toned from self-defense classes. I’m trained to kill. ",{"#":"MC"},{"#":"Amused"},"\n","ev",{"VAR?":"globalIrreverence"},1,"+",{"VAR=":"globalIrreverence","re":true},"/ev",{"->":"EP1Choice8"},{"#f":5}]}],{"#f":1}],"EP1Choice8":["^Kevin: Ha ha! Listen, if you need help with anything, moving, decorating, anything, you just let me know ok? ",{"#":"Kevin"},{"#":"Flirty"},"\n","^Kevin: Training still costs money though. Sorry, not even friends get a discount. ",{"#":"Kevin"},{"#":"Neutral"},"\n","^...: Kevin hands you an off-white business card with embossed gloss lettering. ",{"#":"Narrator"},"\n","^...: It reads, “Kevin Barker, Personal Trainer restoring the mind-body connection.” And then lists his number. ",{"#":"Narrator"},"\n","^...: Of all the phone numbers you’ve been handed since becoming single, you can’t recall any like this. ",{"#":"Narrator"},"\n","^...: The card features clip art of a chicken leg and a barbell crossed to form an X. This sums Kevin up pretty well. ",{"#":"Narrator"},"\n","end",{"#f":1}],"global decl":["ev","str","^Maria","/str",{"VAR=":"globalPlayerName"},0,{"VAR=":"globalWarmth"},0,{"VAR=":"globalFocus"},0,{"VAR=":"globalIrreverence"},0,{"VAR=":"relationshipCullen"},0,{"VAR=":"relationshipNathan"},0,{"VAR=":"relationshipBlaire"},0,{"VAR=":"relationshipKevin"},0,{"VAR=":"relationshipGracie"},0,{"VAR=":"relationshipRashawn"},0,{"VAR=":"relationshipMikhos"},0,{"VAR=":"romanceNathan"},0,{"VAR=":"romanceBlaire"},0,{"VAR=":"romanceKevin"},0,{"VAR=":"romanceRashawn"},0,{"VAR=":"romanceMikhos"},"/ev","end",null],"#f":1}],"listDefs":{}};