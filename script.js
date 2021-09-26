const message_categories = ['Biblical', 'Physics', 'Financial', 'Programming', 'Engineering'];

const Biblical = ['The lips of the righteous feed many, But fools die for lack of wisdom', 
'Before the mountains were settled, Before the hills, I was brought forth.',
'The poor man is hated even by his neighbor, But the irch has many friends.', 
'He who walks with wise men will be wise, But the companion of fools will be destroyed.', 
'Can anyone teach God knowledge, Since He judges those on high?', 
'He stretches out the north over empty space; He hangs the earth on nothing.',
'Save me, O God! For the waters have come up to my neck.', 
'Let heaven and earth praise Him, The seas and everthing that moves in them.',
'What profit has the worker from that in which he labors?',
'That which is has already been, And what is to be has already been; And God requires an account of what is past.', 'Cast your bread upon the waters, For you will find it after many days.', 'Except the Lord builds the house, They labor in vain who builds it; Unless the Lord guards the city, The watchman stays awake in vain.'
];

const Physics = [
'Not only is the Universe stranger than we think, it is stranger than we can think.',
'The laws of physics is the canvas God laid down on which to paint his masterpiece.',
'Physicists have come to realize that mathematics, when used with sufficient care, is a proven pathway to truth.',
'If the universe is an artificial simulation then the mathematics is its code and a physicist is a programmer.',
'The study of physics is also an adventure. You will find it challenging, sometimes frustrating, occasionally painful, and often richly rewarding.',
'The study of physics is also an adventure. You will find it challenging, sometimes frustrating, occasionally painful, and often richly rewarding.',
'Scientists have become the bearers of the torch of discovery in our quest for knowledge.',
'Deep down, nature is inherently peaceful, calm and beautiful. The universe as a whole is perfect. The chaos is on the surface.',
'The question of relevance comes before that of truth, because to ask whether a statement is true or false presupposes that it is relevant.',
'Those who are not shocked when they first come across quantum theory cannot possibly have understood it.',
'The atoms or elementary particles themselves are not real; they form a world of potentialities or possibilities rather than one of things or facts.',
'Physics is essentially an intuitive and concrete science. Mathematics is only a means for expressing the laws that govern phenomena.'];

const Financial = ['The secret to wealth is simple: Find a way to do more for others than anyone else does. Become more valuable. Do more. Give more. Be more. Serve more.',
'Being rich is having money; being wealthy is having time.',
'To get rich, you have to be making money while you’re asleep.',
'Risk comes from not knowing what you’re doing.',
'A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.',
'Financial freedom is freedom from fear.',
'It is not the man who has too little, but the man who craves more, that is poor.',
'Wealth consists not in having great possessions, but in having few wants.',
"Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each.",
'I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.',
'What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us.',
'Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one.']

const Programming =['Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one',
'Computers are fast; programmers keep it slow.',
'When I wrote this code, only God and I understood what I did. Now only God knows.',
"A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
'Copy-and-Paste was programmed by programmers for programmers actually.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
'Algorithm: Word used by programmers when they don’t want to explain what they did.',
'Software and cathedrals are much the same — first we build them, then we pray.',
'A good programmer is someone who always looks both ways before crossing a one-way street.',
"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
"In a room full of top software designers, if two agree on the same thing, that’s a majority.",
'There are only two kinds of programming languages out there. The ones people complain about and the ones no one uses.'];

const Engineering = ['Engineers like to solve problems. If there are no problems handily available, they will create their own problems.', 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.','Math is my Passion. Engineering is my Profession.', 'Any idiot can build a bridge that stands, but it takes an engineer to build a bridge that barely stands.', 'The human foot is a masterpiece of engineering and a work of art.', 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.', 'Engineering is not only study of 45 subjects but it is moral studies of intellectual life.', 'The trick to having good ideas is not to sit around in glorious isolation and try to think big thoughts. The trick is to get more parts on the table.','Projects we have completed demonstrate what we know - future projects decide what we will learn.', 'A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few ideas as possible. There are no prima donnas in engineering.', "An engineer is someone who is good with figures, but doesn't have the personality of an accountant.", 'One has to watch out for engineers - they begin with the sewing machine and end up with the atomic bomb.']

const randomizedQuotes = () =>{
    const messageGroup = Math.floor(Math.random() * 5);
    const random = Math.floor(Math.random() * 12);
    
    if (messageGroup === 0) {
        return '<h2>Your Biblical Inspiration for the day is: </h2><br>\n' + Biblical[random];
    } else if (messageGroup === 1) {
        return '<h2>Your todays Physics message: </h2><br>\n' + Physics[random];
    } else if (messageGroup === 2) {
        return '<h2>Your financial and money tips: </h2><br>\n' + Financial[random];
    } else if (messageGroup === 3) {
        return '<h2>Your Programming  quotes for the day: </h2><br>\n' + Programming[random];
    } else {
        return '<h2>Engineering thoughts for you: </h2><br>\n' + Engineering[random];
    }
};

const messageOne = randomizedQuotes();
const messageTwo = randomizedQuotes();
const messageThree = randomizedQuotes();


let overviewButton = document.getElementById('overview-button');
let overviewTitle = document.getElementById('overview-title');
let mainContent = document.getElementById('main');

let container1 = document.getElementById('1');
let container2 = document.getElementById('2');
let container3 = document.getElementById('3');



mainContent.hidden = true;

overviewButton.onclick = function() {
    overviewButton.hidden = true;
    overviewTitle.hidden = true;

    mainContent.hidden = false;

    container1.innerHTML = messageOne;
    container2.innerHTML = messageTwo;
    container3.innerHTML = messageThree;
}

document.getElementById('reload').onclick = function() {
    location.reload();
};
