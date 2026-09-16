import test from 'node:test';
import assert from 'node:assert/strict';
import { questions, dimensions, scoreQuiz, getTags, getTotalCopy, getDimensionCopy, getProfileCopy } from '../lib/quiz.ts';

const completeWith = (value) => Object.fromEntries(questions.map(q=>[q.id,value]));
test('30 unique questions, 18 scoring questions and 12 background questions',()=>{
 assert.deepEqual(questions.map(q=>q.id),Array.from({length:30},(_,i)=>i+1));
 assert.equal(questions.filter(q=>q.dimension).length,18);
 assert.equal(questions.filter(q=>!q.dimension).length,12);
 for(const q of questions){assert.equal(q.options.length,4);if(q.dimension)assert.equal(q.scores.length,4);}
 for(const d of dimensions)assert.equal(questions.filter(q=>q.dimension===d.key).length,d.total);
});
test('all unknown yields null, never zero or NaN',()=>{
 const r=scoreQuiz(completeWith('E'));assert.equal(r.total,null);assert.equal(r.complete,true);
 r.parts.forEach(p=>{assert.equal(p.score,null);assert.equal(p.valid,0)});
});
test('round only after averaging exact dimension values',()=>{
 const a=completeWith('A');const r=scoreQuiz(a);
 // attention (1+1+1+2+1)/10; attraction 5/10 (Q11 null); closeness 9/14
 assert.equal(r.total,58);assert.deepEqual(r.parts.map(p=>p.score),[60,50,64]);
});
test('changing all background choices leaves numerical result unchanged',()=>{
 const a=completeWith('A');const expected=scoreQuiz(a);
 for(const choice of ['B','C','D','E']){const b={...a};questions.filter(q=>!q.dimension).forEach(q=>b[q.id]=choice);assert.deepEqual(scoreQuiz(b),expected);}
});
test('X options are excluded and minimum coverage is enforced',()=>{
 const a=completeWith('A');a[1]='D';assert.equal(scoreQuiz(a).parts[0].valid,4);assert.equal(scoreQuiz(a).parts[0].score,63);
 a[30]='C';assert.equal(scoreQuiz(a).parts[0].score,null);assert.equal(scoreQuiz(a).total,null);
});
test('incomplete answers cannot produce a final total',()=>{
 const a=completeWith('A');delete a[3];assert.equal(scoreQuiz(a).complete,false);assert.equal(scoreQuiz(a).total,null);
});
test('all unknown background yields no invented tags, repeat tags include evidence ids',()=>{
 assert.deepEqual(getTags(completeWith('E')),[]);
 const tags=getTags({7:'B',16:'B',28:'B'});assert.deepEqual(tags[0].hits,[7,16,28]);
});
test('result copy uses honest five-band boundaries',()=>{
 assert.equal(getTotalCopy(20).title,'你好像还没有喜欢上TA');
 assert.equal(getTotalCopy(21).title,'有点好感，但还谈不上喜欢');
 assert.equal(getTotalCopy(40).title,'有点好感，但还谈不上喜欢');
 assert.equal(getTotalCopy(41).title,'你确实有点喜欢TA了');
 assert.equal(getTotalCopy(61).title,'你是真的挺喜欢TA');
 assert.equal(getTotalCopy(81).title,'你已经很喜欢TA了');
 assert.match(getDimensionCopy('closeness',20).title,/不太想/);
 assert.match(getDimensionCopy('closeness',81).title,/很想/);
});
test('profile copy responds to uneven dimensions',()=>{
 const attentionHigh=getProfileCopy([{key:'attention',score:90},{key:'attraction',score:20},{key:'closeness',score:55}]);
 assert.match(attentionHigh.title,/不一定全是心动/);
 const attractionHigh=getProfileCopy([{key:'attention',score:30},{key:'attraction',score:90},{key:'closeness',score:45}]);
 assert.match(attractionHigh.title,/还没把TA放进日常/);
});
