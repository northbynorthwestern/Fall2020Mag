let tl = gsap.timeline();

tl.from(".article-hed", {opacity: 0, duration: 2}, .5);
tl.from(".article-dek", {opacity: 0, duration: 2}, "<1");
tl.from(".article-byline", {opacity: 0, duration: 2}, "<1");
tl.from(".anon-illo", {right: -1000, duration: 2}, "<.5")
tl.from(".anon-illo", {opacity: 0, duration: 3}, "<.5")
tl.from(".article-body", {opacity: 0, y: 100, duration: 1}, "<1")
tl.from(".article-credits", {opacity: 0, y: 100, duration: 1}, "<")