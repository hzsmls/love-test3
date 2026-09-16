export type Answer = 'A'|'B'|'C'|'D'|'E';
export type Answers = Record<number, Answer>;
export type Dimension = 'attention'|'attraction'|'closeness';
export type Question = { id:number; label:string; text:string; options:[string,string,string,string]; dimension?:Dimension; scores?:[number|null,number|null,number|null,number|null] };
export const questions: Question[] = [
{id:1,label:'聊天之后',text:'一次普通聊天结束后，你放下手机去做其他事情。过了一会儿，你更接近哪种状态？',options:['偶尔想起其中一两句话，感觉不错，然后继续做事。','聊天结束就自然翻篇，之后通常不会再想起。','做其他事时也会自然想到TA，并期待下次交流。','主要记得聊天里的有趣内容，换个人聊也可能如此。'],dimension:'attention',scores:[1,0,2,null]},
{id:2,label:'一个分享的瞬间',text:'你看到一条TA可能感兴趣的内容，但它并没有重要到必须发送。你更可能怎样？',options:['收藏起来，之后谁聊到这个话题就分享给谁。','想发给TA，因为也想知道TA会怎么想。','想到TA可能喜欢，但没有特别想继续交流。','即使最后没发，也会想象和TA聊起来的样子。'],dimension:'closeness',scores:[0,2,1,2]},
{id:3,label:'再待一会儿',text:'聚会结束，有人提议再坐一会儿。假设你没有其他安排，TA留下这件事会怎样影响你？',options:['我本来就想留下，TA在不在影响不大。','会让我更想留下，多一点相处时间。','我主要看活动还有没有意思。','会有一些影响，但不会成为主要考虑。']},
{id:4,label:'说说近况',text:'TA认真问你：“你最近过得怎么样？”你发现对方愿意慢慢听。你更想分享什么？',options:['一些近况，聊到哪里算哪里。','平时对熟人也会说的事情。','一些真正影响自己心情的事，希望TA更了解我。','暂时说得不多，但心里希望以后能更深入地聊。'],dimension:'closeness',scores:[1,1,2,2]},
{id:5,label:'等待的空白',text:'TA说今天有事，晚点再回复。此时你最接近哪种想法？',options:['知道原因后，就比较安心地等。','仍会忍不住想，是否还有别的原因。','没有什么需要继续聊的，晚点也无所谓。','有点想继续聊，但可以接受今天聊不成。']},
{id:6,label:'一点小变化',text:'TA换了一个你不太喜欢的发型，其他方面没有变化。你更接近哪种感受？',options:['第一眼有些不习惯，但依然觉得TA有吸引力。','我原本就没有特别被TA吸引，变化不大。','对TA的吸引感确实淡了一些。','会留意变化，但真正吸引我的主要是相处时的感觉。'],dimension:'attraction',scores:[2,0,1,1]},
{id:7,label:'约一个时间',text:'你们都有空，也都愿意一起吃饭，只差有人确定时间。你更可能怎样？',options:['提出一个时间，看看TA是否方便。','希望TA先确定，我会积极配合。','想约，但可能会犹豫到错过安排。','不太想特意安排，之后碰巧遇到再说。']},
{id:8,label:'不一样的喜好',text:'你发现TA喜欢的一部作品，和你的喜好差别很大。你更接近哪种反应？',options:['想听听TA喜欢它的原因，借此多了解一点TA。','接受喜好不同，没有特别想深入了解。','可能会看看介绍，下次多一个聊天话题。','如果作品本身吸引我就了解，否则不太会关注。'],dimension:'closeness',scores:[2,0,1,0]},
{id:9,label:'想告诉谁',text:'你遇到一件小小的好事，不需要别人帮忙，也没有必须告知的人。想到TA时，你更接近哪种感受？',options:['可以以后聊天时提起，不急于分享。','特别想让TA一起知道这份开心。','主要想发到群里或社交平台，没有特定对象。','想告诉TA，但会犹豫要不要主动开启聊天。'],dimension:'attention',scores:[1,2,0,2]},
{id:10,label:'不同的看法',text:'聊天时TA明确表达了一个与你不同的看法，但不涉及原则或尊重问题。你更可能怎样？',options:['想问问TA为什么这样想。','暂时顺着说，担心不同意见影响TA对我的看法。','说出自己的看法，也愿意听TA解释。','换个话题，不太想深入讨论彼此的想法。']},
{id:11,label:'平凡的相处',text:'一次相处没有特别精彩的活动，只是散步、聊日常。结束时你更接近哪种感受？',options:['活动有些平淡，希望下次换个更有趣的安排。','内容普通，但和TA待在一起本身就让我满足。','和其他熟人相处也差不多。','没有强烈心动，但想继续有这样的相处。'],dimension:'attraction',scores:[null,2,0,1]},
{id:12,label:'被TA看见',text:'TA夸了你一句。和其他人给出同样的夸奖相比，你更接近哪种感受？',options:['只要是真诚的夸奖，感受都差不多。','TA说出来，会让我格外开心。','我更在意夸奖的内容是否准确。','会开心，但也会猜测TA是不是对别人也这样说。'],dimension:'attraction',scores:[0,2,null,1]},
{id:13,label:'见不到的几天',text:'你们最近见不到面，但仍可以正常联系。过了几天，你更接近哪种状态？',options:['偶尔想起TA，有机会再见就好。','会想念和TA相处的感觉，希望再见面。','没有什么变化，日常生活照常进行。','想主动联系，却会担心打扰TA。'],dimension:'attention',scores:[1,2,0,2]},
{id:14,label:'记得的小事',text:'你知道TA最近有一件重要的事，之前已经表达过关心。事情结束后，你更可能怎样？',options:['自然想到这件事，想知道TA的感受。','如果TA提起，我会认真听。','可能记得结果，但没有特别想继续了解。','想问问，但会先考虑我们现在的关系适不适合问。'],dimension:'closeness',scores:[2,1,0,2]},
{id:15,label:'心里的偏向',text:'朋友提起另一个与你条件相合的人。假设没有任何承诺或交往限制，你更接近哪种感受？',options:['愿意认识，目前并没有特别偏向TA。','可以认识，但心里仍更想了解TA。','我主要看实际相处，不会提前偏向谁。','会发现自己目前的感情注意力主要放在TA身上。']},
{id:16,label:'聊天的下一步',text:'一次聊得不错的互动之后，TA暂时没有继续主动。你最想做什么？',options:['有合适话题就再联系，不急着判断。','希望继续，但想等TA先表示。','反复检查之前的对话，寻找自己有没有说错。','没有特别想延续，这次聊得好就够了。']},
{id:17,label:'安静待在一起',text:'你们在安静的环境中相处，暂时都没有说话。假设气氛并不尴尬，你更接近哪种感受？',options:['安静也舒服，愿意继续待在一起。','想找点事情做，不太习惯没有活动。','能接受，但不会特别想延长相处。','会留意到TA在身边，产生一些亲近或心动的感觉。'],dimension:'attraction',scores:[1,null,0,2]},
{id:18,label:'真实的TA',text:'TA说了一件让你意识到“原来我之前并不了解TA”的事。你更接近哪种反应？',options:['想继续听，看看真实的TA是什么样。','记住这件事，之后有机会再了解。','如果与自己关系不大，就不会继续追问。','会发现自己之前有一些想象，需要重新认识TA。'],dimension:'closeness',scores:[2,1,0,1]},
{id:19,label:'空闲的一小时',text:'你有一段可自由安排的时间，既可以独处，也可以和TA做一件普通的小事。两者都方便，你更偏向哪种？',options:['更想和TA一起，即使事情本身很普通。','更想独处，最近本来就需要休息。','两种都可以，没有明显偏好。','对一起做什么有兴趣时才会选TA。']},
{id:20,label:'再看一眼消息',text:'TA一时没有回应，你发现自己又点开了聊天窗口。最接近你的原因是什么？',options:['想继续刚才的话题，看看有没有新消息。','担心TA对自己的看法发生变化。','平时就常查看消息，不只对TA这样。','通常不会反复点开，有提醒再看。']},
{id:21,label:'下一次见面',text:'你想象下一次见到TA，最让你期待的是什么？',options:['一起安排的活动本身。','再次感受到和TA相处时的吸引与亲近。','多了解一点TA最近的经历和想法。','没有明显期待，到时候自然相处。'],dimension:'attraction',scores:[0,2,1,0]},
{id:22,label:'TA的开心',text:'TA兴冲冲地和你分享一件开心的事，但你其实不太懂，也没那么感兴趣。你通常会怎么做？',options:['会问问TA：到底是什么让你这么开心？','会替TA高兴，顺口说几句祝福。','TA想继续讲的话，我会陪TA听一会儿。','会被TA的情绪带动，想听TA把这件事讲完。'],dimension:'closeness',scores:[2,0,1,2]},
{id:23,label:'不完美的一面',text:'你有一点不完美的习惯，TA还不知道。假设它不会伤害任何人，你更接近哪种想法？',options:['希望熟悉以后可以自然让TA知道。','尽量不让TA看到，担心失去好印象。','想被TA了解，但还需要一点时间。','没有特别想让TA了解自己的这一面。']},
{id:24,label:'收到邀请',text:'TA提出一个轻松的见面邀请，时间没有冲突。你更可能怎样回应？',options:['直接答应，并一起商量安排。','答应，但会控制自己表现出的热情。','明明想去，却因为紧张而拖延回复。','想再考虑一下，自己见面的愿望并不强。']},
{id:25,label:'留下的片段',text:'你回想最近几次互动，哪些片段更容易留在记忆里？',options:['TA说话的神情或某些让我心动的小瞬间。','聊过的实用信息或有趣话题。','TA表现出理解我、愿意听我说话的片段。','没有特别留下来的片段。'],dimension:'attraction',scores:[2,0,1,0]},
{id:26,label:'如果不必再猜',text:'假设你已经知道TA对你有好感，暂时不需要再猜测。你更想怎样？',options:['多相处，看看真实的彼此是否合得来。','先享受被喜欢的开心，暂时没有进一步想法。','会更愿意表达自己的好感。','反而想确认，自己是否真的想靠近TA。']},
{id:27,label:'没有新鲜互动',text:'你想起TA时，发现最近没有什么新鲜互动。此时更接近哪种状态？',options:['仍会想知道TA过得怎样，也想再见面。','关注明显淡了，通常需要新互动才会再想起。','偶尔想到，但不太有继续了解的冲动。','依然想靠近，只是暂时没有合适机会。'],dimension:'attention',scores:[2,1,1,2]},
{id:28,label:'表达一点好感',text:'你准备向TA表达一点好感，例如说“今天和你一起挺开心的”。最接近你的情况是？',options:['感觉真实就会说，表达程度会照顾双方的舒适感。','很想说，但通常等对方先表达。','会换成更含蓄的方式，让TA有机会感受到。','我没有特别想传达这种感受。']},
{id:29,label:'关系的下一步',text:'如果接下来一段时间，你们还是维持现在的联系频率和相处方式，没有更进一步的变化。你会更接近下面哪种想法？',options:['这样也挺好，我没有特别想改变。','我会希望有更多单独相处、慢慢了解彼此的机会。','我想更靠近一点，但也会先想清楚自己真正想要什么。','只要现在聊天舒服就好，我不太在意关系会不会变近。'],dimension:'closeness',scores:[0,2,2,1]},
{id:30,label:'回看这份在意',text:'回看最近两周，哪一种描述最贴近你对TA的关注？',options:['主要在TA主动找我时出现，之后容易回到原来的生活。','即使没有新消息，我也会自然想到TA，想了解和接近TA。','经常想到的是TA怎么看我，而不一定是TA本身。','有好感，但TA还没有占据我很多情感注意力。'],dimension:'attention',scores:[1,2,null,1]},
];
export const dimensions = [
{key:'attention' as const,label:'持续关注指数',min:4,total:5,color:'pink',description:'看看没有聊天、没有见面的时候，TA会不会还是自然地出现在你的日常里。'},
{key:'attraction' as const,label:'特别吸引指数',min:4,total:6,color:'yellow',description:'看看你在意的是TA这个人，还是有人聊天、有人回应带来的感觉。'},
{key:'closeness' as const,label:'靠近意愿指数',min:5,total:7,color:'blue',description:'看看你愿不愿意多联系、多见面，让TA更多地进入自己的生活。'},
];

type ResultCopy = { title:string; body:string };
const bands = (score:number) => score <= 20 ? 0 : score <= 40 ? 1 : score <= 60 ? 2 : score <= 80 ? 3 : 4;

const totalCopy: ResultCopy[] = [
 {title:'你好像还没有喜欢上TA',body:'你可能觉得TA人还不错，但目前也只是这样。你不会经常想到TA，也没有很想主动靠近。'},
 {title:'有点好感，但还谈不上喜欢',body:'TA偶尔会让你在意一下，不过这种感觉还不算强。你愿意继续接触，但暂时不会把太多心思放在TA身上。'},
 {title:'你确实有点喜欢TA了',body:'你会想起TA，也会在意TA怎么看你。只是这份喜欢还没有完全确定，有时想靠近，有时又觉得可以再看看。'},
 {title:'你是真的挺喜欢TA',body:'TA已经不只是一个聊得来的人。你会自然地想到TA，期待TA的消息，也希望你们能比现在更近一点。'},
 {title:'你已经很喜欢TA了',body:'TA的一句话、一个反应，都可能影响你的心情。你不只想和TA聊天，也希望自己能成为TA生活里特别的人。'},
];

const dimensionCopies: Record<Dimension, ResultCopy[]> = {
 attention:[
  {title:'你平时很少想到TA',body:'没有聊天或见面的时候，TA不太会出现在你的脑海里。即使相处得不错，你也能很快回到自己的生活。'},
  {title:'你偶尔会想起TA',body:'遇到某些话题或场景时，你可能会想到TA，但不会停留太久。TA让你有些好感，还没有真正走进你的日常。'},
  {title:'TA已经开始出现在你的日常里',body:'看到有趣的东西、想起某段聊天时，你会想到TA。不过这种在意有时明显，有时又会淡下去。'},
  {title:'你会很自然地想到TA',body:'即使没有收到TA的消息，你也常常会在某个瞬间想到TA。遇到开心的小事时，你会想和TA说。'},
  {title:'你真的很挂念TA',body:'TA已经占据了你不少注意力。你会留意TA有没有回复，有时只是TA态度上的一点变化，就会让你想很久。'},
 ],
 attraction:[
  {title:'TA对你来说还没有那么特别',body:'你可能觉得TA性格不错，也不排斥继续接触。但换成另一个同样聊得来的人，你的感觉或许也不会相差太多。'},
  {title:'TA身上有些地方让你喜欢',body:'你能说出TA的一些优点，也享受部分相处时刻。不过你目前更喜欢这段互动，还没有特别想走进TA的内心。'},
  {title:'TA对你来说已经有点特别',body:'你会留意TA的反应，也会记住一些与TA有关的细节。只是你还在分辨，自己是真的喜欢TA，还是刚好很享受最近的相处。'},
  {title:'你喜欢的就是TA这个人',body:'你在意的不只是TA有没有回复。你想知道TA在想什么、经历过什么，也想看到TA更真实的一面。'},
  {title:'TA身上有很多地方让你心动',body:'你会被TA具体的性格、表达和小习惯吸引。即使TA没有一直迎合你，你还是很想了解这个人。'},
 ],
 closeness:[
  {title:'你暂时不太想和TA变得更近',body:'你更愿意维持现在的距离。即使有合适的机会，你也未必想增加联系、单独见面，或让TA知道更多关于你的事。'},
  {title:'你愿意接触，但不会主动往前走',body:'如果TA主动找你，你大多愿意回应。但要让你主动制造见面的机会，或者分享更多自己，你可能还缺少一点动力。'},
  {title:'你想靠近，又有些犹豫',body:'你希望和TA多一些相处，也想知道关系有没有可能向前走。可真正行动前，你还是会担心自己太主动。'},
  {title:'你确实想和TA更亲近',body:'你愿意分享更多日常，也期待拥有单独相处的机会。如果TA也给出回应，你会想让关系自然地向前走一点。'},
  {title:'你很想让TA进入自己的生活',body:'你想要的不只是聊天。你希望见面、陪伴、分享彼此的日常，也会想象你们变得更亲近以后是什么样子。'},
 ],
};

export function getTotalCopy(score:number|null):ResultCopy {
 return score === null ? {title:'这次还不能得出结果',body:'有几道用于计算结果的题暂时无法判断。回去补充选择后，再看看自己的心意。'} : totalCopy[bands(score)];
}
export function getDimensionCopy(key:Dimension,score:number|null):ResultCopy {
 return score === null ? {title:'这一项暂时无法判断',body:'这部分可计算的回答还不够，回顾答案后可以再看看。'} : dimensionCopies[key][bands(score)];
}

export function getProfileCopy(parts:{key:Dimension;score:number|null}[]):ResultCopy {
 if(parts.some(part=>part.score===null)) return getTotalCopy(null);
 const values=Object.fromEntries(parts.map(part=>[part.key,part.score as number])) as Record<Dimension,number>;
 const ordered=[...parts].sort((a,b)=>(b.score as number)-(a.score as number));
 const high=ordered[0].key; const low=ordered[2].key; const gap=(ordered[0].score as number)-(ordered[2].score as number);
 if(gap<15){
  const average=(values.attention+values.attraction+values.closeness)/3;
  if(average<=40)return {title:'你对TA有好感，还没有很深',body:'你并不排斥TA，只是这份感觉还没有明显进入你的日常。继续相处，或许比急着定义关系更容易看清答案。'};
  if(average<=60)return {title:'你有些喜欢TA，还没完全想清楚',body:'你会在意TA，也有心动和靠近的念头。不过这些感觉还会随着相处发生变化。'};
  return {title:'你对TA的喜欢，已经很清楚了',body:'你会想起TA，也被这个具体的人吸引，还希望你们能够更加亲近。这份喜欢已经不只是短暂的新鲜感。'};
 }
 if(high==='attention'&&low==='attraction')return {title:'常想起TA，不一定全是心动',body:'你可能已经习惯了TA的陪伴和回应。可以再看看，你舍不得的是TA，还是有人陪你聊天的感觉。'};
 if(high==='attention'&&low==='closeness')return {title:'你很在意TA，却还不敢靠近',body:'你会想TA，也会留意TA的反应。可一想到关系可能发生变化，你就会停下来。'};
 if(high==='attraction'&&low==='attention')return {title:'你会心动，但还没把TA放进日常',body:'TA身上有明确吸引你的地方。不过离开见面或聊天的情境后，你不一定会经常想起TA。'};
 if(high==='attraction'&&low==='closeness')return {title:'你喜欢TA，但还不敢往前走',body:'你知道自己被TA吸引。只是当喜欢需要变成行动时，你会担心太明显，或者破坏现在的关系。'};
 if(high==='closeness'&&low==='attention')return {title:'你愿意发展，还没有深深陷进去',body:'你不排斥和TA更亲近，也愿意给这段关系一个机会。不过TA目前还没有频繁出现在你的日常里。'};
 return {title:'你想让关系更近，但还需要再认识TA',body:'你愿意让关系向前发展。接下来可以看看，你想靠近的是TA这个人，还是刚好想拥有一段亲密关系。'};
}

export function getClosingCopy(score:number|null):ResultCopy {
 if(score===null)return {title:'有些感受暂时说不清楚，也没关系。',body:'回看那些让你犹豫的题，也许会更了解自己。'};
 return [
  {title:'暂时没有很喜欢，也是一种清楚的答案。',body:'不需要因为TA条件不错，或者别人觉得你们合适，就逼自己产生更多感觉。'},
  {title:'有好感的时候，不用急着把它叫作喜欢。',body:'再相处一段时间，看看你期待的是TA，还是一段让人开心的互动。'},
  {title:'你可以允许自己一边喜欢，一边犹豫。',body:'继续了解TA，也继续留意自己在这段关系里是否舒服。'},
  {title:'你已经知道自己在意TA了。',body:'接下来不用反复猜自己喜不喜欢，而是看看TA有没有认真回应你的靠近。'},
  {title:'你很喜欢TA，也别忘了看看自己是否被好好对待。',body:'喜欢会让人想靠近，一段舒服的关系也应该让你感到被回应、被尊重。'},
 ][bands(score)];
}
export function scoreQuiz(answers:Answers){
 const parts=dimensions.map(d=>{const valid=questions.filter(q=>q.dimension===d.key).flatMap(q=>{const a=answers[q.id];const value=a&&a!=='E'?q.scores?.['ABCD'.indexOf(a)]:null;return typeof value==='number'?[value]:[]});const raw=valid.length>=d.min?valid.reduce((s,n)=>s+n,0)/(valid.length*2)*100:null;return {...d,valid:valid.length,raw,score:raw===null?null:Math.round(raw)}});
 const complete=questions.every(q=>Boolean(answers[q.id]));
 return {parts,complete,total:complete&&parts.every(p=>p.raw!==null)?Math.round(parts.reduce((sum,p)=>sum+(p.raw??0),0)/3):null};
}
export const tagRules = [
 {label:'表达比较直接',items:[[7,'A'],[24,'A'],[28,'A']]},
 {label:'会先等待回应',items:[[7,'B'],[16,'B'],[28,'B']]},
 {label:'表达时会斟酌',items:[[7,'C'],[24,'B'],[24,'C'],[28,'C']]},
 {label:'会留意对方的评价',items:[[5,'B'],[10,'B'],[16,'C'],[20,'B'],[23,'B']]},
] as const;
export function getTags(answers:Answers){return tagRules.map(t=>({...t,hits:t.items.filter(([id,a])=>answers[id]===a).map(([id])=>id)})).filter(t=>t.hits.length>=2).sort((a,b)=>b.hits.length-a.hits.length);}
