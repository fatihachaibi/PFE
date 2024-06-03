/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.synthetics_bundle_jsonpfunction=window.synthetics_bundle_jsonpfunction||[]).push([[2],{109:function(t,n,e){t.exports=e(10)(45)},110:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pipeable=n.pipe=void 0;var r=e(80);n.pipe=r.pipe,n.pipeable=function(t){var n={};return function(t){return"function"==typeof t.map}(t)&&(n.map=function(n){return function(e){return t.map(e,n)}}),function(t){return"function"==typeof t.contramap}(t)&&(n.contramap=function(n){return function(e){return t.contramap(e,n)}}),function(t){return"function"==typeof t.mapWithIndex}(t)&&(n.mapWithIndex=function(n){return function(e){return t.mapWithIndex(e,n)}}),function(t){return"function"==typeof t.ap}(t)&&(n.ap=function(n){return function(e){return t.ap(e,n)}},n.apFirst=function(n){return function(e){return t.ap(t.map(e,(function(t){return function(){return t}})),n)}},n.apSecond=function(n){return function(e){return t.ap(t.map(e,(function(){return function(t){return t}})),n)}}),function(t){return"function"==typeof t.chain}(t)&&(n.chain=function(n){return function(e){return t.chain(e,n)}},n.chainFirst=function(n){return function(e){return t.chain(e,(function(e){return t.map(n(e),(function(){return e}))}))}},n.flatten=function(n){return t.chain(n,r.identity)}),function(t){return"function"==typeof t.bimap}(t)&&(n.bimap=function(n,e){return function(r){return t.bimap(r,n,e)}},n.mapLeft=function(n){return function(e){return t.mapLeft(e,n)}}),function(t){return"function"==typeof t.extend}(t)&&(n.extend=function(n){return function(e){return t.extend(e,n)}},n.duplicate=function(n){return t.extend(n,r.identity)}),function(t){return"function"==typeof t.reduce}(t)&&(n.reduce=function(n,e){return function(r){return t.reduce(r,n,e)}},n.foldMap=function(n){var e=t.foldMap(n);return function(t){return function(n){return e(n,t)}}},n.reduceRight=function(n,e){return function(r){return t.reduceRight(r,n,e)}}),function(t){return"function"==typeof t.reduceWithIndex}(t)&&(n.reduceWithIndex=function(n,e){return function(r){return t.reduceWithIndex(r,n,e)}},n.foldMapWithIndex=function(n){var e=t.foldMapWithIndex(n);return function(t){return function(n){return e(n,t)}}},n.reduceRightWithIndex=function(n,e){return function(r){return t.reduceRightWithIndex(r,n,e)}}),function(t){return"function"==typeof t.alt}(t)&&(n.alt=function(n){return function(e){return t.alt(e,n)}}),function(t){return"function"==typeof t.compact}(t)&&(n.compact=t.compact,n.separate=t.separate),function(t){return"function"==typeof t.filter}(t)&&(n.filter=function(n){return function(e){return t.filter(e,n)}},n.filterMap=function(n){return function(e){return t.filterMap(e,n)}},n.partition=function(n){return function(e){return t.partition(e,n)}},n.partitionMap=function(n){return function(e){return t.partitionMap(e,n)}}),function(t){return"function"==typeof t.filterWithIndex}(t)&&(n.filterWithIndex=function(n){return function(e){return t.filterWithIndex(e,n)}},n.filterMapWithIndex=function(n){return function(e){return t.filterMapWithIndex(e,n)}},n.partitionWithIndex=function(n){return function(e){return t.partitionWithIndex(e,n)}},n.partitionMapWithIndex=function(n){return function(e){return t.partitionMapWithIndex(e,n)}}),function(t){return"function"==typeof t.promap}(t)&&(n.promap=function(n,e){return function(r){return t.promap(r,n,e)}}),function(t){return"function"==typeof t.compose}(t)&&(n.compose=function(n){return function(e){return t.compose(e,n)}}),function(t){return"function"==typeof t.throwError}(t)&&(n.fromOption=function(n){return function(e){return"None"===e._tag?t.throwError(n()):t.of(e.value)}},n.fromEither=function(n){return"Left"===n._tag?t.throwError(n.left):t.of(n.right)},n.fromPredicate=function(n,e){return function(r){return n(r)?t.of(r):t.throwError(e(r))}},n.filterOrElse=function(n,e){return function(r){return t.chain(r,(function(r){return n(r)?t.of(r):t.throwError(e(r))}))}}),n}},111:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(45),i=e(52),o=e(58);const u=async()=>await o.a.get(r.a.INDEX_STATUS,void 0,i.w)},137:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.apS=n.bind=n.bindTo=n.getRefinement=n.exists=n.elem=n.option=n.MonadThrow=n.Witherable=n.Traversable=n.Filterable=n.Compactable=n.Extend=n.Alternative=n.Alt=n.Foldable=n.Monad=n.Applicative=n.Functor=n.getMonoid=n.getLastMonoid=n.getFirstMonoid=n.getApplyMonoid=n.getApplySemigroup=n.getOrd=n.getEq=n.getShow=n.URI=n.wilt=n.wither=n.sequence=n.traverse=n.partitionMap=n.partition=n.filterMap=n.filter=n.separate=n.compact=n.reduceRight=n.foldMap=n.reduce=n.duplicate=n.extend=n.throwError=n.zero=n.alt=n.flatten=n.chainFirst=n.chain=n.of=n.apSecond=n.apFirst=n.ap=n.map=n.mapNullable=n.getOrElse=n.getOrElseW=n.toUndefined=n.toNullable=n.fold=n.fromEither=n.getRight=n.getLeft=n.tryCatch=n.fromPredicate=n.fromNullable=n.some=n.none=n.isNone=n.isSome=void 0;var r=e(80);function i(t){return null==t?n.none:n.some(t)}function o(t){return"Right"===t._tag?n.none:n.some(t.left)}function u(t){return"Left"===t._tag?n.none:n.some(t.right)}n.isSome=function(t){return"Some"===t._tag},n.isNone=function(t){return"None"===t._tag},n.none={_tag:"None"},n.some=function(t){return{_tag:"Some",value:t}},n.fromNullable=i,n.fromPredicate=function(t){return function(e){return t(e)?n.some(e):n.none}},n.tryCatch=function(t){try{return n.some(t())}catch(t){return n.none}},n.getLeft=o,n.getRight=u,n.fromEither=function(t){return"Left"===t._tag?n.none:n.some(t.right)},n.fold=function(t,e){return function(r){return n.isNone(r)?t():e(r.value)}},n.toNullable=function(t){return n.isNone(t)?null:t.value},n.toUndefined=function(t){return n.isNone(t)?void 0:t.value},n.getOrElseW=function(t){return function(e){return n.isNone(e)?t():e.value}},n.getOrElse=n.getOrElseW,n.mapNullable=function(t){return function(e){return n.isNone(e)?n.none:i(t(e.value))}};var a=function(t,e){return r.pipe(t,n.map(e))},c=function(t,e){return r.pipe(t,n.ap(e))},f=function(t,e){return r.pipe(t,n.chain(e))},p=function(t,e,i){return r.pipe(t,n.reduce(e,i))},s=function(t){var e=n.foldMap(t);return function(t,n){return r.pipe(t,e(n))}},l=function(t,e,i){return r.pipe(t,n.reduceRight(e,i))},d=function(t){var e=n.traverse(t);return function(t,n){return r.pipe(t,e(n))}},m=function(t,e){return r.pipe(t,n.alt(e))},h=function(t,e){return r.pipe(t,n.filter(e))},g=function(t,e){return r.pipe(t,n.filterMap(e))},I=function(t,e){return r.pipe(t,n.extend(e))},v=function(t,e){return r.pipe(t,n.partition(e))},S=function(t,e){return r.pipe(t,n.partitionMap(e))},R=function(t){var e=n.wither(t);return function(t,n){return r.pipe(t,e(n))}},y=function(t){var e=n.wilt(t);return function(t,n){return r.pipe(t,e(n))}};n.map=function(t){return function(e){return n.isNone(e)?n.none:n.some(t(e.value))}},n.ap=function(t){return function(e){return n.isNone(e)||n.isNone(t)?n.none:n.some(e.value(t.value))}},n.apFirst=function(t){return r.flow(n.map((function(t){return function(){return t}})),n.ap(t))},n.apSecond=function(t){return r.flow(n.map((function(){return function(t){return t}})),n.ap(t))},n.of=n.some,n.chain=function(t){return function(e){return n.isNone(e)?n.none:t(e.value)}},n.chainFirst=function(t){return n.chain((function(e){return r.pipe(t(e),n.map((function(){return e})))}))},n.flatten=n.chain(r.identity),n.alt=function(t){return function(e){return n.isNone(e)?t():e}},n.zero=function(){return n.none},n.throwError=function(){return n.none},n.extend=function(t){return function(e){return n.isNone(e)?n.none:n.some(t(e))}},n.duplicate=n.extend(r.identity),n.reduce=function(t,e){return function(r){return n.isNone(r)?t:e(t,r.value)}},n.foldMap=function(t){return function(e){return function(r){return n.isNone(r)?t.empty:e(r.value)}}},n.reduceRight=function(t,e){return function(r){return n.isNone(r)?t:e(r.value,t)}},n.compact=n.flatten;var E={left:n.none,right:n.none};function O(t){return{equals:function(e,r){return e===r||(n.isNone(e)?n.isNone(r):!n.isNone(r)&&t.equals(e.value,r.value))}}}function b(t){return{concat:function(e,r){return n.isSome(e)&&n.isSome(r)?n.some(t.concat(e.value,r.value)):n.none}}}n.separate=function(t){var e=r.pipe(t,n.map((function(t){return{left:o(t),right:u(t)}})));return n.isNone(e)?E:e.value},n.filter=function(t){return function(e){return n.isNone(e)?n.none:t(e.value)?e:n.none}},n.filterMap=function(t){return function(e){return n.isNone(e)?n.none:t(e.value)}},n.partition=function(t){return function(e){return{left:r.pipe(e,n.filter((function(n){return!t(n)}))),right:r.pipe(e,n.filter(t))}}},n.partitionMap=function(t){return function(e){return n.separate(r.pipe(e,n.map(t)))}},n.traverse=function(t){return function(e){return function(r){return n.isNone(r)?t.of(n.none):t.map(e(r.value),n.some)}}},n.sequence=function(t){return function(e){return n.isNone(e)?t.of(n.none):t.map(e.value,n.some)}},n.wither=function(t){return function(e){return function(r){return n.isNone(r)?t.of(n.none):e(r.value)}}},n.wilt=function(t){return function(e){return function(i){var a=r.pipe(i,n.map((function(n){return t.map(e(n),(function(t){return{left:o(t),right:u(t)}}))})));return n.isNone(a)?t.of({left:n.none,right:n.none}):a.value}}},n.URI="Option",n.getShow=function(t){return{show:function(e){return n.isNone(e)?"none":"some("+t.show(e.value)+")"}}},n.getEq=O,n.getOrd=function(t){return{equals:O(t).equals,compare:function(e,r){return e===r?0:n.isSome(e)?n.isSome(r)?t.compare(e.value,r.value):1:-1}}},n.getApplySemigroup=b,n.getApplyMonoid=function(t){return{concat:b(t).concat,empty:n.some(t.empty)}},n.getFirstMonoid=function(){return{concat:function(t,e){return n.isNone(t)?e:t},empty:n.none}},n.getLastMonoid=function(){return{concat:function(t,e){return n.isNone(e)?t:e},empty:n.none}},n.getMonoid=function(t){return{concat:function(e,r){return n.isNone(e)?r:n.isNone(r)?e:n.some(t.concat(e.value,r.value))},empty:n.none}},n.Functor={URI:n.URI,map:a},n.Applicative={URI:n.URI,map:a,ap:c,of:n.of},n.Monad={URI:n.URI,map:a,ap:c,of:n.of,chain:f},n.Foldable={URI:n.URI,reduce:p,foldMap:s,reduceRight:l},n.Alt={URI:n.URI,map:a,alt:m},n.Alternative={URI:n.URI,map:a,ap:c,of:n.of,alt:m,zero:n.zero},n.Extend={URI:n.URI,map:a,extend:I},n.Compactable={URI:n.URI,compact:n.compact,separate:n.separate},n.Filterable={URI:n.URI,map:a,compact:n.compact,separate:n.separate,filter:h,filterMap:g,partition:v,partitionMap:S},n.Traversable={URI:n.URI,map:a,reduce:p,foldMap:s,reduceRight:l,traverse:d,sequence:n.sequence},n.Witherable={URI:n.URI,map:a,reduce:p,foldMap:s,reduceRight:l,traverse:d,sequence:n.sequence,compact:n.compact,separate:n.separate,filter:h,filterMap:g,partition:v,partitionMap:S,wither:R,wilt:y},n.MonadThrow={URI:n.URI,map:a,ap:c,of:n.of,chain:f,throwError:n.throwError},n.option={URI:n.URI,map:a,of:n.of,ap:c,chain:f,reduce:p,foldMap:s,reduceRight:l,traverse:d,sequence:n.sequence,zero:n.zero,alt:m,extend:I,compact:n.compact,separate:n.separate,filter:h,filterMap:g,partition:v,partitionMap:S,wither:R,wilt:y,throwError:n.throwError},n.elem=function(t){return function(e,r){return!n.isNone(r)&&t.equals(e,r.value)}},n.exists=function(t){return function(e){return!n.isNone(e)&&t(e.value)}},n.getRefinement=function(t){return function(e){return n.isSome(t(e))}},n.bindTo=function(t){return n.map(r.bindTo_(t))},n.bind=function(t,e){return n.chain((function(i){return r.pipe(e(i),n.map((function(n){return r.bind_(i,t,n)})))}))},n.apS=function(t,e){return r.flow(n.map((function(n){return function(e){return r.bind_(n,t,e)}})),n.ap(e))}},177:function(t,n,e){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),i=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&r(n,t,e);return i(n,t),n};Object.defineProperty(n,"__esModule",{value:!0}),n.apS=n.apSW=n.bind=n.bindW=n.bindTo=n.bracket=n.taskify=n.taskEitherSeq=n.taskEither=n.Alt=n.Bifunctor=n.ApplicativeSeq=n.ApplicativePar=n.Functor=n.getFilterable=n.getTaskValidation=n.getAltTaskValidation=n.getApplicativeTaskValidation=n.getApplyMonoid=n.getApplySemigroup=n.getSemigroup=n.URI=n.throwError=n.fromTask=n.fromIO=n.of=n.alt=n.flatten=n.chainFirst=n.chainFirstW=n.chain=n.chainW=n.apSecond=n.apFirst=n.ap=n.apW=n.mapLeft=n.bimap=n.map=n.chainIOEitherK=n.chainIOEitherKW=n.chainEitherK=n.chainEitherKW=n.fromIOEitherK=n.fromEitherK=n.tryCatchK=n.filterOrElse=n.swap=n.orElse=n.getOrElse=n.getOrElseW=n.fold=n.tryCatch=n.fromPredicate=n.fromOption=n.fromEither=n.fromIOEither=n.leftIO=n.rightIO=n.leftTask=n.rightTask=n.right=n.left=void 0;var u=o(e(62)),a=e(178),c=e(80),f=o(e(181));function p(t,n){return function(){return t().then(u.right,(function(t){return u.left(n(t))}))}}function s(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.fromEither(t.apply(void 0,e))}}function l(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.fromIOEither(t.apply(void 0,e))}}n.left=c.flow(u.left,f.of),n.right=c.flow(u.right,f.of),n.rightTask=f.map(u.right),n.leftTask=f.map(u.left),n.rightIO=c.flow(f.fromIO,n.rightTask),n.leftIO=c.flow(f.fromIO,n.leftTask),n.fromIOEither=f.fromIO,n.fromEither=u.fold(n.left,(function(t){return n.right(t)})),n.fromOption=function(t){return function(e){return"None"===e._tag?n.left(t()):n.right(e.value)}},n.fromPredicate=function(t,e){return function(r){return t(r)?n.right(r):n.left(e(r))}},n.tryCatch=p,n.fold=c.flow(u.fold,f.chain),n.getOrElseW=function(t){return function(n){return c.pipe(n,f.chain(u.fold(t,f.of)))}},n.getOrElse=n.getOrElseW,n.orElse=function(t){return f.chain(u.fold(t,n.right))},n.swap=f.map(u.swap),n.filterOrElse=function(t,e){return n.chain((function(r){return t(r)?n.right(r):n.left(e(r))}))},n.tryCatchK=function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return p((function(){return t.apply(void 0,e)}),n)}},n.fromEitherK=s,n.fromIOEitherK=l,n.chainEitherKW=function(t){return n.chainW(s(t))},n.chainEitherK=n.chainEitherKW,n.chainIOEitherKW=function(t){return n.chainW(l(t))},n.chainIOEitherK=n.chainIOEitherKW;var d=function(t,e){return c.pipe(t,n.map(e))},m=function(t,e,r){return c.pipe(t,n.bimap(e,r))},h=function(t,e){return c.pipe(t,n.mapLeft(e))},g=function(t,e){return c.pipe(t,n.ap(e))},I=function(t,e){return c.pipe(t,n.chain((function(t){return c.pipe(e,n.map(t))})))},v=function(t,e){return c.pipe(t,n.chain(e))},S=function(t,e){return c.pipe(t,n.alt(e))};function R(t){return f.getSemigroup(u.getApplySemigroup(t))}function y(t,e){var r=u.getApplicativeValidation(e);return{URI:n.URI,_E:void 0,map:d,ap:function(n,e){return c.pipe(n,(i=e,function(n){return t.ap(t.map(n,(function(t){return function(n){return r.ap(t,n)}})),i)}));var i},of:n.of}}function E(t){return{URI:n.URI,_E:void 0,map:d,alt:function(n,e){return c.pipe(n,f.chain((function(n){return u.isRight(n)?f.of(n):c.pipe(e(),f.map((function(e){return u.isLeft(e)?u.left(t.concat(n.left,e.left)):e})))})))}}}n.map=function(t){return f.map(u.map(t))},n.bimap=c.flow(u.bimap,f.map),n.mapLeft=function(t){return f.map(u.mapLeft(t))},n.apW=function(t){return c.flow(f.map((function(t){return function(n){return u.apW(n)(t)}})),f.ap(t))},n.ap=n.apW,n.apFirst=function(t){return c.flow(n.map((function(t){return function(){return t}})),n.ap(t))},n.apSecond=function(t){return c.flow(n.map((function(){return function(t){return t}})),n.ap(t))},n.chainW=function(t){return function(e){return c.pipe(e,f.chain(u.fold(n.left,t)))}},n.chain=n.chainW,n.chainFirstW=function(t){return n.chainW((function(e){return c.pipe(t(e),n.map((function(){return e})))}))},n.chainFirst=n.chainFirstW,n.flatten=n.chain(c.identity),n.alt=function(t){return f.chain(u.fold(t,n.right))},n.of=n.right,n.fromIO=n.rightIO,n.fromTask=n.rightTask,n.throwError=n.left,n.URI="TaskEither",n.getSemigroup=function(t){return f.getSemigroup(u.getSemigroup(t))},n.getApplySemigroup=R,n.getApplyMonoid=function(t){return{concat:R(t).concat,empty:n.right(t.empty)}},n.getApplicativeTaskValidation=y,n.getAltTaskValidation=E,n.getTaskValidation=function(t){var e=y(f.ApplicativePar,t),r=E(t);return{URI:n.URI,_E:void 0,map:d,ap:e.ap,of:n.of,chain:v,bimap:m,mapLeft:h,alt:r.alt,fromIO:n.fromIO,fromTask:n.fromTask,throwError:n.throwError}},n.getFilterable=function(t){var e=u.getWitherable(t),r=a.getFilterableComposition(f.Monad,e);return{URI:n.URI,_E:void 0,map:d,compact:r.compact,separate:r.separate,filter:r.filter,filterMap:r.filterMap,partition:r.partition,partitionMap:r.partitionMap}},n.Functor={URI:n.URI,map:d},n.ApplicativePar={URI:n.URI,map:d,ap:g,of:n.of},n.ApplicativeSeq={URI:n.URI,map:d,ap:I,of:n.of},n.Bifunctor={URI:n.URI,bimap:m,mapLeft:h},n.Alt={URI:n.URI,map:d,alt:S},n.taskEither={URI:n.URI,bimap:m,mapLeft:h,map:d,of:n.of,ap:g,chain:v,alt:S,fromIO:n.fromIO,fromTask:n.fromTask,throwError:n.throwError},n.taskEitherSeq={URI:n.URI,bimap:m,mapLeft:h,map:d,of:n.of,ap:I,chain:v,alt:S,fromIO:n.fromIO,fromTask:n.fromTask,throwError:n.throwError},n.taskify=function(t){return function(){var n=Array.prototype.slice.call(arguments);return function(){return new Promise((function(e){t.apply(null,n.concat((function(t,n){return e(null!=t?u.left(t):u.right(n))})))}))}}},n.bracket=function(t,e,r){return c.pipe(t,n.chain((function(t){return c.pipe(c.pipe(e(t),f.map(u.right)),n.chain((function(e){return c.pipe(r(t,e),n.chain((function(){return u.isLeft(e)?n.left(e.left):n.of(e.right)})))})))})))},n.bindTo=function(t){return n.map(c.bindTo_(t))},n.bindW=function(t,e){return n.chainW((function(r){return c.pipe(e(r),n.map((function(n){return c.bind_(r,t,n)})))}))},n.bind=n.bindW,n.apSW=function(t,e){return c.flow(n.map((function(n){return function(e){return c.bind_(n,t,e)}})),n.apW(e))},n.apS=n.apSW},178:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getFilterableComposition=void 0;var r=e(179),i=e(137);n.getFilterableComposition=function(t,n){var e=r.getCompactableComposition(t,n),o={map:e.map,compact:e.compact,separate:e.separate,partitionMap:function(t,n){return{left:o.filterMap(t,(function(t){return i.getLeft(n(t))})),right:o.filterMap(t,(function(t){return i.getRight(n(t))}))}},partition:function(t,n){return{left:o.filter(t,(function(t){return!n(t)})),right:o.filter(t,n)}},filterMap:function(e,r){return t.map(e,(function(t){return n.filterMap(t,r)}))},filter:function(e,r){return t.map(e,(function(t){return n.filter(t,r)}))}};return o}},179:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getCompactableComposition=void 0;var r=e(180),i=e(137);n.getCompactableComposition=function(t,n){var e=r.getFunctorComposition(t,n),o={map:e.map,compact:function(e){return t.map(e,n.compact)},separate:function(t){return{left:o.compact(e.map(t,i.getLeft)),right:o.compact(e.map(t,i.getRight))}}};return o}},180:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getFunctorComposition=void 0,n.getFunctorComposition=function(t,n){return{map:function(e,r){return t.map(e,(function(t){return n.map(t,r)}))}}}},181:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.apS=n.bind=n.bindTo=n.never=n.taskSeq=n.task=n.Monad=n.ApplicativeSeq=n.ApplicativePar=n.Functor=n.getRaceMonoid=n.getMonoid=n.getSemigroup=n.URI=n.fromTask=n.flatten=n.chainFirst=n.chain=n.of=n.apSecond=n.apFirst=n.ap=n.map=n.chainIOK=n.fromIOK=n.delay=n.fromIO=void 0;var r=e(80);function i(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.fromIO(t.apply(void 0,e))}}n.fromIO=function(t){return function(){return Promise.resolve(t())}},n.delay=function(t){return function(n){return function(){return new Promise((function(e){setTimeout((function(){n().then(e)}),t)}))}}},n.fromIOK=i,n.chainIOK=function(t){return n.chain(i(t))};var o=function(t,e){return r.pipe(t,n.map(e))},u=function(t,e){return r.pipe(t,n.ap(e))},a=function(t,e){return r.pipe(t,n.chain((function(t){return r.pipe(e,n.map(t))})))},c=function(t,e){return r.pipe(t,n.chain(e))};function f(t){return{concat:function(n,e){return function(){return n().then((function(n){return e().then((function(e){return t.concat(n,e)}))}))}}}}n.map=function(t){return function(n){return function(){return n().then(t)}}},n.ap=function(t){return function(n){return function(){return Promise.all([n(),t()]).then((function(t){return(0,t[0])(t[1])}))}}},n.apFirst=function(t){return r.flow(n.map((function(t){return function(){return t}})),n.ap(t))},n.apSecond=function(t){return r.flow(n.map((function(){return function(t){return t}})),n.ap(t))},n.of=function(t){return function(){return Promise.resolve(t)}},n.chain=function(t){return function(n){return function(){return n().then((function(n){return t(n)()}))}}},n.chainFirst=function(t){return n.chain((function(e){return r.pipe(t(e),n.map((function(){return e})))}))},n.flatten=n.chain(r.identity),n.fromTask=r.identity,n.URI="Task",n.getSemigroup=f,n.getMonoid=function(t){return{concat:f(t).concat,empty:n.of(t.empty)}},n.getRaceMonoid=function(){return{concat:function(t,n){return function(){return Promise.race([t(),n()])}},empty:n.never}},n.Functor={URI:n.URI,map:o},n.ApplicativePar={URI:n.URI,map:o,ap:u,of:n.of},n.ApplicativeSeq={URI:n.URI,map:o,ap:a,of:n.of},n.Monad={URI:n.URI,map:o,of:n.of,ap:u,chain:c},n.task={URI:n.URI,map:o,of:n.of,ap:u,chain:c,fromIO:n.fromIO,fromTask:n.fromTask},n.taskSeq={URI:n.URI,map:o,of:n.of,ap:a,chain:c,fromIO:n.fromIO,fromTask:n.fromTask},n.never=function(){return new Promise((function(t){}))},n.bindTo=function(t){return n.map(r.bindTo_(t))},n.bind=function(t,e){return n.chain((function(i){return r.pipe(e(i),n.map((function(n){return r.bind_(i,t,n)})))}))},n.apS=function(t,e){return r.flow(n.map((function(n){return function(e){return r.bind_(n,t,e)}})),n.ap(e))}},56:function(t,n,e){"use strict";e.d(n,"f",(function(){return u})),e.d(n,"i",(function(){return a})),e.d(n,"h",(function(){return c})),e.d(n,"q",(function(){return f})),e.d(n,"k",(function(){return p})),e.d(n,"r",(function(){return l})),e.d(n,"u",(function(){return d})),e.d(n,"e",(function(){return m.a})),e.d(n,"m",(function(){return h})),e.d(n,"l",(function(){return g})),e.d(n,"g",(function(){return I})),e.d(n,"v",(function(){return v})),e.d(n,"s",(function(){return S})),e.d(n,"a",(function(){return R})),e.d(n,"j",(function(){return y})),e.d(n,"p",(function(){return E})),e.d(n,"t",(function(){return O})),e.d(n,"w",(function(){return b})),e.d(n,"d",(function(){return T})),e.d(n,"b",(function(){return _})),e.d(n,"c",(function(){return w})),e.d(n,"o",(function(){return M})),e.d(n,"n",(function(){return N}));var r=e(52),i=e(58),o=e(45);const u=async({monitorId:t,dateStart:n,dateEnd:e})=>{const u={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(o.a.MONITOR_DETAILS,u,r.l)},a=async({monitorId:t,dateStart:n,dateEnd:e})=>{const u={dateStart:n,dateEnd:e,monitorId:t};return await i.a.get(o.a.MONITOR_LOCATIONS,u,r.m)},c=async t=>await i.a.get(o.a.MONITOR_LIST,t,r.p),f=async({dateRangeStart:t,dateRangeEnd:n,filters:e,query:u})=>{const a={dateRangeStart:t,dateRangeEnd:n,...e&&{filters:e},...u&&{query:u}};return await i.a.get(o.a.SNAPSHOT_COUNT,a,r.t)},p=async({monitorId:t,dateStart:n,dateEnd:e})=>{const r={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(o.a.MONITOR_STATUS,r)},s=o.a.DYNAMIC_SETTINGS,l=async()=>await i.a.get(s,void 0,r.h),d=async({settings:t})=>await i.a.post(s,t,r.g);var m=e(111);const h=async({dateRange:{from:t,to:n},...e})=>await i.a.get(o.a.PINGS,{from:t,to:n,...e},r.q),g=async({monitorId:t,dateStart:n,dateEnd:e,filters:r,bucketSize:u,query:a})=>{const c={dateStart:n,dateEnd:e,monitorId:t,filters:r,bucketSize:u,query:a};return await i.a.get(o.a.PING_HISTOGRAM,c)},I=async({monitorId:t,dateStart:n,dateEnd:e})=>{const r={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(o.a.MONITOR_DURATION,r)},v=async({monitor:t,id:n})=>n?await i.a.put(`${o.a.SYNTHETICS_MONITORS}/${n}`,t):await i.a.post(o.a.SYNTHETICS_MONITORS,t),S=async({id:t})=>await i.a.get(`${o.a.SYNTHETICS_MONITORS}/${t}`),R=async({id:t})=>await i.a.delete(`${o.a.SYNTHETICS_MONITORS}/${t}`),y=async t=>await i.a.get(o.a.SYNTHETICS_MONITORS,t,r.o),E=async()=>{const{throttling:t,locations:n}=await i.a.get(o.a.SERVICE_LOCATIONS,void 0,r.s);return{throttling:t,locations:n}},O=async({monitor:t,id:n})=>await i.a.post(o.a.RUN_ONCE_MONITOR+`/${n}`,t),b=async t=>await i.a.get(o.a.TRIGGER_MONITOR+`/${t}`),T=async()=>await i.a.get(o.a.SYNTHETICS_ENABLEMENT,void 0,r.n),_=async()=>await i.a.delete(o.a.SYNTHETICS_ENABLEMENT),w=async()=>await i.a.post(o.a.SYNTHETICS_ENABLEMENT),M=async()=>await i.a.get(o.a.SERVICE_ALLOWED),N=async()=>await i.a.get(o.a.SYNTHETICS_APIKEY)},58:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(8),i=e.n(r),o=e(62),u=e(82),a=e.n(u),c=e(32),f=function(t){var n=t.map((function(t){if(null!=t.message)return t.message;var n=t.context.filter((function(t){return null!=t.key&&!Number.isInteger(+t.key)&&""!==t.key.trim()})).map((function(t){return t.key})).join(","),e=t.context.find((function(t){return null!=t.type&&null!=t.type.name&&t.type.name.length>0})),r=""!==n?n:null!=e?e.type.name:"",i=Object(c.isObject)(t.value)?JSON.stringify(t.value):t.value;return'Invalid value "'.concat(i,'" supplied to "').concat(r,'"')}));return a()(new Set(n))},p=(e(6),e(29),e(109),e(110),Object(o.fold)((function(t){return{schema:{},errors:t}}),(function(t){return{schema:t,errors:[]}})),e(177),e(55),e(9));class utils_ApiService{get http(){return this._http}set http(t){this._http=t}get addInspectorRequest(){return this._addInspectorRequest}set addInspectorRequest(t){this._addInspectorRequest=t}constructor(){i()(this,"_http",void 0),i()(this,"_addInspectorRequest",void 0)}static getInstance(){return utils_ApiService.instance||(utils_ApiService.instance=new utils_ApiService),utils_ApiService.instance}async get(t,n,e,r=!1){var i;const u=await this._http.fetch({path:t,query:n,asResponse:r});if(null===(i=this.addInspectorRequest)||void 0===i||i.call(this,{data:u,status:p.FETCH_STATUS.SUCCESS,loading:!1}),e){const n=e.decode(u);if(Object(o.isRight)(n))return n.right;console.error(`API ${t} is not returning expected response, ${f(n.left)} for response`,u)}return u}async post(t,n,e){var r;const i=await this._http.post(t,{method:"POST",body:JSON.stringify(n)});if(null===(r=this.addInspectorRequest)||void 0===r||r.call(this,{data:i,status:p.FETCH_STATUS.SUCCESS,loading:!1}),e){const n=e.decode(i);if(Object(o.isRight)(n))return n.right;console.warn(`API ${t} is not returning expected response, ${f(n.left)}`)}return i}async put(t,n,e){const r=await this._http.put(t,{method:"PUT",body:JSON.stringify(n)});if(e){const n=e.decode(r);if(Object(o.isRight)(n))return n.right;console.warn(`API ${t} is not returning expected response, ${f(n.left)}`)}return r}async delete(t){const n=await this._http.delete(t);if(n instanceof Error)throw n;return n}}i()(utils_ApiService,"instance",void 0);const s=utils_ApiService.getInstance()},59:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(8),i=e.n(r),o=e(58);class KibanaService{get core(){return this._core}set core(t){this._core=t,o.a.http=this._core.http}get theme(){return this._theme}set theme(t){this._theme=t}get toasts(){return this._core.notifications.toasts}constructor(){i()(this,"_core",void 0),i()(this,"_theme",void 0)}static getInstance(){return KibanaService.instance||(KibanaService.instance=new KibanaService),KibanaService.instance}}i()(KibanaService,"instance",void 0);const u=KibanaService.getInstance()},82:function(t,n,e){t.exports=e(10)(23)}}]);