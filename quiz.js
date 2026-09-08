const roles=[
 {name:'نائب قائد المبادرة',desc:'تميل لرؤية الصورة الكبيرة، جمع الفريق، واتخاذ قرار متزن عند تعدد الخيارات.'},
 {name:'مسؤول العمليات والمتابعة',desc:'تفضّل تحويل الفكرة إلى مهام ومواعيد واضحة ومتابعة التنفيذ حتى النهاية.'},
 {name:'مسؤول الابتكار والاستدامة',desc:'تميل للأفكار الجديدة والحلول القابلة للتجربة والتحسين والاستمرار.'},
 {name:'مسؤول المعرفة والتعليم',desc:'تستمتع بشرح الأفكار، بناء المحتوى، وتحويل المعرفة إلى تجربة مفيدة للطلاب.'},
 {name:'مسؤول الخدمة المجتمعية',desc:'تبحث عن الاحتياج الحقيقي وتفضّل المشاريع التي تخدم الآخرين بشكل مباشر.'},
 {name:'مسؤول الإعلام والتصميم',desc:'تهتم بطريقة تقديم الفكرة بصريًا وكتابيًا ووصول الرسالة للطلاب بوضوح.'},
 {name:'مسؤول قياس الأثر والجودة',desc:'تهتم بالأرقام، الملاحظات، جودة التنفيذ، ومعرفة ما إذا كان المشروع نجح فعلًا.'},
 {name:'مسؤول العضوية',desc:'تلاحظ ديناميكية الفريق، التزام الأعضاء، وتحب بناء تجربة عضوية منظمة وعادلة.'}
];

const tracks=[
 {name:'ERTH Creativity — الابتكار والاستدامة',desc:'مسارك يميل إلى الحلول الجديدة، التجارب، والاستدامة.'},
 {name:'ERTH Academy — المعرفة والتعليم',desc:'مسارك يميل إلى التعلم، المحتوى، والأنشطة التعليمية.'},
 {name:'ERTH Community — الخدمة المجتمعية',desc:'مسارك يميل إلى التطوع، الاحتياجات المجتمعية، وخدمة الآخرين.'}
];

const Q=[
 {q:'عند بدء نشاط جديد، أي مهمة تختار أولًا؟',c:[['أجمع آراء الفريق وأحدد معه الأولوية',0,1],['أقسم العمل إلى مهام ومواعيد',1,0],['أقترح فكرة مختلفة وأجربها',2,0],['أجهز محتوى يشرح الفكرة للطلاب',5,1]]},
 {q:'تعطل المشروع قبل موعده بأيام. ما أول شيء تفعله؟',c:[['أعيد توزيع الأدوار وأحسم الأولويات',0,2],['أحدد سبب التأخير وأبني خطة تعويض',1,0],['أراجع مؤشرات التنفيذ لأعرف أين الخلل',6,1],['أتواصل مع الأعضاء وأعرف من يحتاج دعمًا',7,2]]},
 {q:'أي نوع من المشاريع يشدك أكثر؟',c:[['حل ذكي لمشكلة بيئية أو مدرسية',2,0],['ورشة أو تجربة تعلم مفيدة',3,1],['حملة أو خدمة لاحتياج مجتمعي',4,2],['حملة بصرية تجعل الفكرة تنتشر',5,1]]},
 {q:'عضو في الفريق بدأ يفقد حماسه. كيف تتعامل؟',c:[['أتحدث معه وأفهم ما يناسبه داخل الفريق',7,2],['أعيد ضبط المهمة والموعد بشكل واقعي',1,0],['أربطه بهدف الفريق وأساعده على استعادة الدافع',0,1],['أراجع هل المشكلة متكررة وتؤثر على الجودة',6,1]]},
 {q:'بعد تنفيذ فعالية، ما الشيء الذي يهمك أكثر؟',c:[['هل حققت الهدف بالأرقام والملاحظات؟',6,1],['هل شعر المستفيدون أنها خدمتهم فعلًا؟',4,2],['هل وصلت الرسالة بشكل واضح وجذاب؟',5,1],['هل خرج الطلاب بمعرفة أو مهارة جديدة؟',3,1]]},
 {q:'لو طُلب منك عرض فكرة إرث أمام مجموعة، ماذا تفضّل؟',c:[['أقود العرض وأرتب الرسالة الأساسية',0,2],['أصمم العرض وطريقة ظهوره',5,1],['أشرح الفكرة ببساطة وأمثلة',3,1],['أعرض الحل الجديد ولماذا يستحق التجربة',2,0]]},
 {q:'في مشروع يحتاج عددًا من المتطوعين، أين يظهر دورك؟',c:[['اختيار الأشخاص وتوزيعهم ومتابعة تجربتهم',7,2],['فهم احتياج المستفيدين وتنظيم الخدمة',4,2],['إعداد جدول التنفيذ ونقاط التسليم',1,0],['حل التعارضات واتخاذ القرار وقت الضغط',0,2]]},
 {q:'ما أول شيء تفعله بعد انتهاء مشروع ناجح؟',c:[['أوثق النتائج وأقارنها بالهدف',6,1],['أحوّل النتائج إلى قصة ومحتوى للنشر',5,1],['أراجع الخطة لأعرف ما الذي نكرره أو نطوره',1,0],['أستخرج الدروس وأحوّلها لمحتوى يستفيد منه الطلاب',3,1]]},
 {q:'عندك ساعة فراغ لإرث. أين تضعها؟',c:[['أبحث عن فكرة ابتكارية قابلة للتنفيذ',2,0],['أجهز محتوى تعليمي قصير',3,1],['أسأل عن احتياج يمكن للمبادرة خدمته',4,2],['أرتب منشورًا أو هوية لمشروع قادم',5,1]]},
 {q:'الميزانية محدودة. كيف تفكر؟',c:[['أعيد ترتيب الموارد والأولويات',1,0],['أبحث عن حل أبسط وأكثر ابتكارًا',2,0],['أحدد الجزء الذي يصنع أكبر أثر فعلي',6,2],['أركز على ما يحتاجه المستفيد أكثر من الإضافات',4,2]]},
 {q:'وصل نقد قوي لمشروعك. ما رد فعلك الأقرب؟',c:[['أسمع الآراء وأقرر ما الذي يجب تغييره',0,2],['أحوّل النقد إلى نقاط قابلة للقياس والتحسين',6,1],['أراجع هل الرسالة قُدمت بطريقة غير واضحة',5,1],['أجمع ملاحظات الفريق وأتأكد أن الجميع مسموع',7,2]]},
 {q:'عند إطلاق مشروع جديد، أي مخرج تحب أن يكون جاهزًا أولًا؟',c:[['خطة تنفيذ واضحة',1,0],['هوية ورسالة جذابة',5,1],['مؤشرات نجاح وقياس',6,2],['مادة أو تجربة يتعلم منها الطالب',3,1]]},
 {q:'اختر المشروع الذي تتمنى أن تقوده يومًا ما.',c:[['تحدي ابتكار أو مشروع استدامة',2,0],['سلسلة ورش أو لقاءات معرفية',3,1],['برنامج خدمة مجتمعية مستمر',4,2],['مشروع يجمع المسارات الثلاثة تحت هدف واحد',0,2]]},
 {q:'فريقك فيه شخصيات ومهارات مختلفة جدًا. ماذا تفعل؟',c:[['أضع كل شخص في الدور الذي يناسب قوته',7,2],['أجمعهم على هدف واحد ومسؤوليات واضحة',0,2],['أخلق طريقة لتبادل المعرفة بينهم',3,1],['أستفيد من تنوعهم لفهم المجتمع المستهدف',4,2]]},
 {q:'أي وصف يشبه طريقة عملك أكثر؟',c:[['أحب التفاصيل والجداول والمتابعة',1,0],['أحب الأرقام والتحقق من الجودة',6,1],['أرى الصورة الكبيرة وأربط الأجزاء ببعض',0,2],['أجرب وأعدل حتى أصل لحل أفضل',2,0]]},
 {q:'بالنسبة لك، «الأثر» الحقيقي يعني…',c:[['حل يستمر ويتطور بدل أن يكون مؤقتًا',2,0],['معرفة تنتقل من طالب إلى آخر',3,1],['خدمة تغيّر شيئًا يحتاجه الآخرون',4,2],['قصة واضحة تجعل العمل معروفًا وقابلًا للتوسع',5,1]]}
];

let idx=0;
let answers=Array(Q.length).fill(null);
let studentName='';
const $=id=>document.getElementById(id);

function cleanName(value){
  return value.replace(/\s+/g,' ').trim().slice(0,40);
}

function render(){
  const item=Q[idx];
  $('questionCount').textContent=`السؤال ${idx+1} من ${Q.length}`;
  $('questionCategory').textContent=idx<8?'أسلوب العمل':'الميول والتأثير';
  $('progressBar').style.width=`${((idx+1)/Q.length)*100}%`;
  $('questionText').textContent=item.q;
  $('quizName').textContent=studentName;
  $('choices').innerHTML='';
  item.c.forEach((ch,i)=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='choice'+(answers[idx]===i?' selected':'');
    b.textContent=ch[0];
    b.onclick=()=>{answers[idx]=i;render()};
    $('choices').appendChild(b);
  });
  $('prevBtn').disabled=idx===0;
  $('nextBtn').disabled=answers[idx]===null;
  $('nextBtn').textContent=idx===Q.length-1?'عرض النتيجة ←':'التالي ←';
}

function normalize(values){
  const sum=values.reduce((a,b)=>a+b,0)||1;
  const raw=values.map(v=>v/sum*100);
  const base=raw.map(Math.floor);
  let left=100-base.reduce((a,b)=>a+b,0);
  raw.map((v,i)=>[v-base[i],i]).sort((a,b)=>b[0]-a[0]).slice(0,left).forEach(x=>base[x[1]]++);
  return base;
}

function showResults(){
  const rs=Array(roles.length).fill(0);
  const ts=Array(tracks.length).fill(0);
  answers.forEach((a,i)=>{
    const ch=Q[i].c[a];
    rs[ch[1]]+=1;
    ts[ch[2]]+=1;
  });
  const rp=normalize(rs),tp=normalize(ts);
  const rOrder=rp.map((v,i)=>[v,i]).sort((a,b)=>b[0]-a[0]);
  const tOrder=tp.map((v,i)=>[v,i]).sort((a,b)=>b[0]-a[0]);
  const ri=rOrder[0][1],ti=tOrder[0][1];

  $('resultName').textContent=studentName;
  $('topRole').textContent=roles[ri].name;
  $('topRoleDesc').textContent=roles[ri].desc;
  $('topRolePct').textContent=rp[ri]+'%';
  $('topTrack').textContent=tracks[ti].name;
  $('topTrackDesc').textContent=tracks[ti].desc;
  $('topTrackPct').textContent=tp[ti]+'%';
  makeBars('roleBars',roles,rp,rOrder);
  makeBars('trackBars',tracks,tp,tOrder);

  $('quizCard').classList.add('hidden');
  $('results').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

function makeBars(id,items,pcts,order){
  $(id).innerHTML='';
  order.forEach(([pct,i])=>{
    const row=document.createElement('div');
    const head=document.createElement('div');
    head.className='bar-head';
    const label=document.createElement('span');
    label.textContent=items[i].name;
    const value=document.createElement('b');
    value.textContent=pct+'%';
    head.append(label,value);
    const track=document.createElement('div');
    track.className='bar-track';
    const fill=document.createElement('div');
    fill.className='bar-fill';
    fill.style.width=pct+'%';
    track.appendChild(fill);
    row.append(head,track);
    $(id).appendChild(row);
  });
}

$('studentName').addEventListener('input',()=>{
  if(cleanName($('studentName').value)) $('nameError').classList.add('hidden');
});

$('studentName').addEventListener('keydown',e=>{
  if(e.key==='Enter') $('startQuiz').click();
});

$('startQuiz').onclick=()=>{
  studentName=cleanName($('studentName').value);
  if(!studentName){
    $('nameError').classList.remove('hidden');
    $('studentName').focus();
    return;
  }
  $('nameError').classList.add('hidden');
  $('quizIntro').classList.add('hidden');
  $('quizCard').classList.remove('hidden');
  render();
};

$('prevBtn').onclick=()=>{if(idx>0){idx--;render()}};
$('nextBtn').onclick=()=>{
  if(answers[idx]===null)return;
  if(idx<Q.length-1){idx++;render()}else showResults();
};

$('restartBtn').onclick=()=>{
  idx=0;
  answers=Array(Q.length).fill(null);
  $('results').classList.add('hidden');
  $('quizIntro').classList.remove('hidden');
  $('studentName').value=studentName;
  window.scrollTo({top:0,behavior:'smooth'});
};
