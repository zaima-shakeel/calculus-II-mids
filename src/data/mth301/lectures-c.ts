import type { Lecture } from './types'

export const lecturesC: Lecture[] = [
  {
    id: 'l13',
    number: '13',
    title: 'Differentials and Total Differentials',
    shortTitle: 'Differentials',
    overview:
      'Differentials estimate how a function changes when the inputs change by a little. For one variable, $dy=f\'(x)\\,dx$. For two variables, the total differential is $dz=f_x\\,dx+f_y\\,dy$. This is the standard tool for error estimation.',
    takeaways: [
      '$dz=f_x\\,dx+f_y\\,dy$ (add a $f_z\\,dz$ term in three variables).',
      'A decrease means a negative increment.',
      '$dz$ approximates $\\Delta z$; they are not exactly equal.',
    ],
    concepts: [
      {
        name: 'Differential $dy$',
        definition: 'Linear estimate of the change in $y$ caused by a small change $dx$.',
        explanation: 'Instead of $f(x+dx)-f(x)$, use $f\'(x)\\,dx$.',
        why: 'Fast error estimates without recomputing the whole function.',
        priority: 'high',
      },
      {
        name: 'Total differential $dz$',
        definition: 'For $z=f(x,y)$, $dz=f_x\\,dx+f_y\\,dy$.',
        explanation: 'Add the $x$-effect and the $y$-effect.',
        why: 'Volume, area, and measurement-error questions.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'One variable',
        latex: 'dy=f\'(x)\\,dx',
        meaning: 'Linear approximation of $\\Delta y$.',
        when: 'Single-input estimates.',
      },
      {
        name: 'Two variables',
        latex: 'dz=f_x(x,y)\\,dx+f_y(x,y)\\,dy',
        meaning: 'Total differential.',
        when: 'Small changes in both $x$ and $y$.',
      },
    ],
    methods: [
      {
        type: 'Estimating a change in area or volume',
        steps: [
          'Write the formula ($A=xy$, $V=xyz$, …).',
          'Compute every first partial.',
          'Insert the given values and the increments $dx, dy, \\ldots$.',
          'A measured error of $\\pm\\varepsilon$ uses $|dx|=|dy|=\\varepsilon$ for a maximum-error estimate.',
        ],
        example: {
          question: '$V=xyz$. Write $dV$.',
          solution: '$dV=yz\\,dx+xz\\,dy+xy\\,dz$.',
        },
      },
    ],
    examples: [
      {
        question: 'Rectangle $x=10$, $y=5$. $x$ increases by $0.1$, $y$ decreases by $0.2$. Approximate $\\Delta A$.',
        steps: [
          '$A=xy$, so $dA=y\\,dx+x\\,dy$.',
          '$dA=5(0.1)+10(-0.2)=0.5-2=-1.5$.',
        ],
        answer: 'Area decreases by about $1.5$',
      },
      {
        question: 'Box $3\\times 4\\times 5$. Each side is measured with error $\\pm 0.05$. Estimate the maximum error in volume.',
        steps: [
          '$dV=yz\\,dx+xz\\,dy+xy\\,dz$.',
          'Use $dx=dy=dz=0.05$.',
          '$dV=(20)(0.05)+(15)(0.05)+(12)(0.05)=1+0.75+0.6=2.35$.',
        ],
        answer: '$2.35\\ \\mathrm{cm}^3$',
      },
      {
        question: 'If $z=x^2+3xy-y^2$, find $dz$.',
        steps: [
          '$f_x=2x+3y$, $f_y=3x-2y$.',
          '$dz=(2x+3y)\\,dx+(3x-2y)\\,dy$.',
        ],
        answer: '$dz=(2x+3y)\\,dx+(3x-2y)\\,dy$',
      },
    ],
    traps: [
      'Forgetting that “decreases” makes $dx$ negative.',
      'Wrong partials (not freezing the other variable).',
      'Treating $dz$ as the exact change.',
    ],
    memorize: [
      '$dz=f_x\\,dx+f_y\\,dy$.',
      'Maximum error: take every increment positive.',
    ],
    revision: [
      'Partials first, then linear combination.',
      'Watch signs on increments.',
    ],
    mcqs: [
      {
        question: 'If $z=x^2 y$, then $dz$ is:',
        options: [
          '$2x\\,dx+y\\,dy$',
          '$2xy\\,dx+x^2\\,dy$',
          '$x^2 y$',
          '$2xy+x^2$',
        ],
        correct: 1,
        explanation: '$f_x=2xy$, $f_y=x^2$.',
      },
      {
        question: 'In a differential, $dx$ represents:',
        options: ['The exact change in $z$', 'A small change in $x$', 'A partial derivative', 'A critical point'],
        correct: 1,
        explanation: '$dx$ is the increment of the input.',
      },
      {
        question: 'If $x$ increases by $0.1$, then $dx$ is:',
        options: ['Negative', 'Positive', 'Zero', 'Undefined'],
        correct: 1,
        explanation: 'Increase means a positive increment.',
      },
      {
        question: 'The differential of a constant is:',
        options: ['$1$', '$0$', '$dx$', 'the constant itself'],
        correct: 1,
        explanation: 'Its derivative is zero.',
      },
      {
        question: 'Is $dz$ always equal to the exact change in $z$?',
        options: ['Yes', 'No, it is an approximation', 'Only if $f$ is linear', 'Only at critical points'],
        correct: 1,
        explanation: 'Differentials are linear approximations. (They are exact for truly linear $f$.)',
      },
    ],
    practice: [
      {
        question: 'Find $dz$ for $z=\\sin(xy)$.',
        steps: [
          '$z_x=y\\cos(xy)$, $z_y=x\\cos(xy)$.',
          '$dz=y\\cos(xy)\\,dx+x\\cos(xy)\\,dy$.',
        ],
        answer: '$dz=y\\cos(xy)\\,dx+x\\cos(xy)\\,dy$',
      },
      {
        question: 'A square has side $4$. The side increases by $0.02$. Approximate the change in area.',
        steps: ['$A=x^2$, $dA=2x\\,dx=2(4)(0.02)=0.16$.'],
        answer: '$0.16$',
      },
    ],
    cram: {
      top: [
        'Total-differential formula',
        'Computing partials',
        'Error estimation for $V$ and $A$',
        'Sign of increments',
        'Linear approximation',
      ],
      min30: 'Three error-estimation problems.',
      min15: 'Write $dz$ in two and three variables.',
      min5: 'Memorize $dz=f_x\\,dx+f_y\\,dy$.',
    },
  },
  {
    id: 'l14',
    number: '14',
    title: 'Extrema of Functions',
    shortTitle: 'Extrema',
    overview:
      'Absolute extrema are the global high and low; relative extrema are local hills and valleys. Critical points satisfy $f_x=f_y=0$ and are the only interior candidates. A saddle is a critical point that is neither max nor min.',
    takeaways: [
      'Critical point: $f_x(a,b)=0$ and $f_y(a,b)=0$.',
      'Solve the system simultaneously; do not drop solutions.',
      'A zero gradient does not automatically mean a max or min.',
    ],
    concepts: [
      {
        name: 'Absolute extrema',
        definition: 'The largest or smallest value of $f$ on the whole domain (or on a given region).',
        explanation: 'The global peak or valley.',
        why: 'Optimization: best possible value.',
        priority: 'high',
      },
      {
        name: 'Relative (local) extrema',
        definition: 'A point higher or lower than all nearby points.',
        explanation: 'A local hill may not be the tallest mountain.',
        why: 'These occur at critical points.',
        priority: 'high',
      },
      {
        name: 'Critical point',
        definition: 'A point $(a,b)$ where $f_x(a,b)=0$ and $f_y(a,b)=0$ (or a partial fails to exist).',
        explanation: 'The surface is instantaneously flat in both axis directions.',
        why: 'Every interior local extremum is a critical point.',
        priority: 'high',
      },
      {
        name: 'Extreme Value Theorem',
        definition: 'A continuous function on a closed bounded set attains absolute max and min.',
        explanation: 'No holes, region like a closed box: highs and lows exist.',
        why: 'Guarantees that the closed-region algorithm works.',
        priority: 'medium',
      },
      {
        name: 'Saddle point',
        definition: 'A critical point that is neither a relative max nor a relative min.',
        explanation: 'A mountain pass: up one way, down the other.',
        priority: 'medium',
        why: 'Do not report a saddle as an extremum.',
      },
    ],
    formulas: [
      {
        name: 'Critical-point equations',
        latex: 'f_x(x,y)=0,\\quad f_y(x,y)=0',
        meaning: 'A $2\\times 2$ system for candidate points.',
        when: 'Any “find the critical points” question.',
      },
    ],
    methods: [
      {
        type: 'Finding critical points',
        recognize: '“Find the critical points of $f(x,y)$.”',
        steps: [
          'Compute $f_x$ and $f_y$.',
          'Set both equal to zero.',
          'Solve the system (substitution is the usual tool).',
          'List every pair $(x,y)$.',
        ],
        example: {
          question: '$f(x,y)=x^3+y^3-3xy$.',
          solution: '$y=x^2$ and $x=y^2$ give $(0,0)$ and $(1,1)$.',
        },
      },
    ],
    examples: [
      {
        question: 'Find the critical points of $f(x,y)=x^3+y^3-3xy$.',
        concept: 'Nonlinear system',
        steps: [
          '$f_x=3x^2-3y=0\\Rightarrow y=x^2$.',
          '$f_y=3y^2-3x=0\\Rightarrow x=y^2$.',
          '$(x^2)^2=x\\Rightarrow x^4-x=0\\Rightarrow x(x^3-1)=0$.',
          '$x=0\\Rightarrow y=0$; $x=1\\Rightarrow y=1$.',
        ],
        answer: '$(0,0)$ and $(1,1)$',
      },
    ],
    traps: [
      'Setting only one partial to zero.',
      'Dividing by a variable and losing $x=0$.',
      'Calling every critical point an extremum.',
    ],
    memorize: [
      'Critical point $\\Leftrightarrow$ $f_x=f_y=0$.',
      'EVT needs continuous + closed + bounded.',
    ],
    revision: [
      'Set both partials to zero.',
      'Absolute = global; relative = local.',
    ],
    mcqs: [
      {
        question: 'A point where $f_x=0$ and $f_y=0$ is called a:',
        options: ['Saddle only', 'Critical point', 'Inflection', 'Boundary point'],
        correct: 1,
        explanation: 'That is the definition of a critical point.',
      },
      {
        question: 'A saddle point is a relative maximum.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'A saddle is neither max nor min.',
      },
      {
        question: 'The Extreme Value Theorem requires the function to be _____ on a closed bounded set.',
        options: ['Differentiable', 'Continuous', 'Linear', 'Polynomial'],
        correct: 1,
        explanation: 'Continuity on a compact set is enough.',
      },
      {
        question: 'If $f$ is not continuous on a closed set, the Extreme Value Theorem:',
        options: ['Still applies', 'Need not apply', 'Forces a maximum at $0$', 'Requires $f_x=0$'],
        correct: 1,
        explanation: 'Without continuity the conclusion can fail.',
      },
    ],
    practice: [
      {
        question: 'Define an absolute maximum.',
        steps: ['It is the largest value $f$ attains on the whole domain (or stated region).'],
        answer: 'Global highest value',
      },
      {
        question: 'Find the critical points of $f(x,y)=x^2+y^2$.',
        steps: ['$f_x=2x=0\\Rightarrow x=0$', '$f_y=2y=0\\Rightarrow y=0$'],
        answer: '$(0,0)$',
      },
    ],
    cram: {
      top: [
        'Set both partials to zero',
        'Solve the nonlinear system',
        'Definition of a critical point',
        'Absolute vs relative',
        'Saddle $\\neq$ extremum',
      ],
      min30: 'Re-solve $x^3+y^3-3xy$ carefully.',
      min15: 'Definitions plus the method.',
      min5: 'Memorize $f_x=0$ and $f_y=0$.',
    },
  },
  {
    id: 'l15',
    number: '15',
    title: 'Critical Points and Relative Extrema',
    shortTitle: 'Second-derivative test',
    overview:
      'After you find critical points, classify them with the second partial derivative test. Compute $D=f_{xx}f_{yy}-(f_{xy})^2$. The sign of $D$, and then of $f_{xx}$, tells you min, max, saddle, or inconclusive.',
    takeaways: [
      '$D=f_{xx}f_{yy}-(f_{xy})^2$.',
      '$D>0$ and $f_{xx}>0$: relative min. $D>0$ and $f_{xx}<0$: relative max.',
      '$D<0$: saddle. $D=0$: test fails.',
    ],
    concepts: [
      {
        name: 'Critical point',
        definition: '$(a,b)$ where $f_x$ and $f_y$ are zero or fail to exist.',
        explanation: 'A flat or sharp spot: peak, valley, or saddle.',
        why: 'Relative extrema can only occur here (interior).',
        priority: 'high',
      },
      {
        name: 'Second partial derivative test',
        definition: 'Classify $(a,b)$ using the Hessian discriminant $D$.',
        explanation: '$D$ measures whether the surface bends the same way in every direction.',
        why: 'You classify without drawing the graph.',
        priority: 'high',
      },
      {
        name: 'Saddle point',
        definition: 'A critical point that is not a relative extremum.',
        explanation: 'Up one direction, down another.',
        why: 'The usual conclusion when $D<0$.',
        priority: 'medium',
      },
    ],
    formulas: [
      {
        name: 'Discriminant',
        latex: 'D=f_{xx}f_{yy}-(f_{xy})^2',
        meaning: 'Determinant of the Hessian.',
        when: 'After the critical points are known.',
      },
    ],
    methods: [
      {
        type: 'Classifying critical points',
        steps: [
          'Find $f_x$ and $f_y$; solve $f_x=f_y=0$.',
          'Compute $f_{xx}$, $f_{yy}$, $f_{xy}$.',
          'Evaluate $D$ at each critical point.',
          '$D>0, f_{xx}>0$: min. $D>0, f_{xx}<0$: max. $D<0$: saddle. $D=0$: inconclusive.',
        ],
      },
    ],
    examples: [
      {
        question: 'Classify the critical points of $f(x,y)=x^2+y^2$.',
        steps: [
          '$f_x=2x$, $f_y=2y$ give $(0,0)$.',
          '$f_{xx}=2$, $f_{yy}=2$, $f_{xy}=0$.',
          '$D=4>0$ and $f_{xx}>0$: relative minimum.',
        ],
        answer: 'Relative minimum at $(0,0)$',
      },
      {
        question: 'Find and classify critical points of $f(x,y)=x^2-4x+y^2$.',
        steps: [
          '$f_x=2x-4=0\\Rightarrow x=2$, $f_y=2y=0\\Rightarrow y=0$.',
          '$D=(2)(2)-0=4>0$, $f_{xx}=2>0$.',
        ],
        answer: 'Relative minimum at $(2,0)$',
      },
    ],
    traps: [
      '$D>0$ is not enough — you must still look at $f_{xx}$.',
      '$D=0$ does not mean “saddle”; the test simply fails.',
      'Sign errors while solving $f_x=0$, $f_y=0$.',
    ],
    memorize: [
      '$D=f_{xx}f_{yy}-(f_{xy})^2$.',
      'Min / max / saddle / inconclusive cases.',
    ],
    revision: [
      'Solve the first-partial system.',
      'Then compute $D$ and read the table.',
    ],
    mcqs: [
      {
        question: 'At a saddle point the discriminant $D$ is:',
        options: ['$>0$', '$<0$', '$=0$', '$1$'],
        correct: 1,
        explanation: '$D<0$ implies a saddle.',
      },
      {
        question: 'If $D>0$ and $f_{xx}>0$, the point is a:',
        options: ['Relative minimum', 'Relative maximum', 'Saddle', 'Inconclusive'],
        correct: 0,
        explanation: 'Positive $D$ and upward $x$-concavity give a min.',
      },
      {
        question: 'If $D=0$, the second-derivative test is:',
        options: ['A minimum', 'A maximum', 'A saddle', 'Inconclusive'],
        correct: 3,
        explanation: 'You need another method.',
      },
      {
        question: '$f_x$ for $x^2+xy+y^2$ is:',
        options: ['$2x+y$', '$2x+x$', '$2y$', '$0$'],
        correct: 0,
        explanation: 'Power rule on $x^2$ plus product on $xy$.',
      },
    ],
    practice: [
      {
        question: 'Define a saddle point.',
        steps: [
          'It is a critical point that is neither a relative max nor a relative min.',
          'The surface rises in one direction and falls in another.',
        ],
        answer: 'Critical point that is not an extremum',
      },
      {
        question: 'Classify $(0,0)$ for $f(x,y)=x^2-y^2$.',
        steps: [
          '$f_{xx}=2$, $f_{yy}=-2$, $f_{xy}=0$.',
          '$D=-4<0$: saddle.',
        ],
        answer: 'Saddle point',
      },
    ],
    cram: {
      top: [
        'Formula for $D$',
        'Min: $D>0$, $f_{xx}>0$',
        'Max: $D>0$, $f_{xx}<0$',
        'Saddle: $D<0$',
        'Inconclusive: $D=0$',
      ],
      min30: 'Classify two full examples, including a saddle.',
      min15: 'Write the $D$ table from memory.',
      min5: 'Memorize $D=f_{xx}f_{yy}-(f_{xy})^2$ and the three conclusions.',
    },
  },
  {
    id: 'l16',
    number: '16',
    title: 'Absolute Maxima and Minima',
    shortTitle: 'Absolute extrema',
    overview:
      'On a closed bounded interval or region, the absolute max and min occur at critical points or on the boundary (endpoints in 1D). Never stop after finding interior critical points — always evaluate the boundary too.',
    takeaways: [
      'Algorithm: critical points inside + boundary / endpoints, then compare values.',
      'Evaluate $f$, not $f\'$, at those points.',
      'Largest value is the absolute max; smallest is the absolute min.',
    ],
    concepts: [
      {
        name: 'Absolute maximum',
        definition: 'The largest value $f$ attains on the given domain.',
        explanation: 'The highest $z$ (or $y$) anywhere in the allowed set.',
        why: 'Optimization language: maximum profit, etc.',
        priority: 'high',
      },
      {
        name: 'Absolute minimum',
        definition: 'The smallest value $f$ attains on the given domain.',
        explanation: 'The lowest point in the allowed set.',
        why: 'Same algorithm, opposite comparison.',
        priority: 'high',
      },
      {
        name: 'Critical points',
        definition: 'Where the derivative is zero or undefined.',
        explanation: 'Interior candidates only.',
        why: 'They must be compared with the boundary.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'One-variable candidates',
        latex: 'f\'(x)=0',
        meaning: 'Interior critical points on $[a,b]$.',
        when: 'Closed-interval problems.',
      },
      {
        name: 'Two-variable interior candidates',
        latex: 'f_x=0,\\quad f_y=0',
        meaning: 'Stationary points inside the region.',
        when: 'Then restrict $f$ to each boundary curve.',
      },
    ],
    methods: [
      {
        type: 'Absolute extrema on $[a,b]$',
        recognize: 'A function plus a closed interval.',
        steps: [
          'Solve $f\'(x)=0$ (and note where $f\'$ DNE).',
          'Keep only candidates inside $[a,b]$.',
          'Evaluate $f$ at those points and at $x=a$, $x=b$.',
          'Largest output is the abs max; smallest is the abs min.',
        ],
      },
    ],
    examples: [
      {
        question: 'Find absolute extrema of $f(x)=x^3+x^2-x$ on $[-2,2]$.',
        steps: [
          '$f\'=3x^2+2x-1=(3x-1)(x+1)=0$.',
          'Critical points $x=1/3$ and $x=-1$.',
          '$f(-2)=-2$, $f(2)=10$, $f(-1)=1$, $f(1/3)\\approx -0.19$.',
          'Abs max $10$, abs min $-2$.',
        ],
        answer: 'Max $10$ at $x=2$; min $-2$ at $x=-2$',
      },
    ],
    traps: [
      'Stopping after critical points and skipping endpoints.',
      'Evaluating $f\'$ instead of $f$.',
      'Sign errors on negative bases.',
    ],
    memorize: [
      'Critical points + endpoints $\\to$ compare $f$ values.',
    ],
    revision: [
      'Interior flats and the boundary both matter.',
      'Compare numbers, then name max and min.',
    ],
    mcqs: [
      {
        question: 'On a closed interval, an absolute maximum can occur at:',
        options: ['Critical points only', 'Endpoints only', 'Critical points or endpoints', 'Inflection points only'],
        correct: 2,
        explanation: 'Both families of candidates must be checked.',
      },
      {
        question: 'For $f(x)=x^2$ on $[-1,2]$, the absolute minimum is:',
        options: ['$1$', '$4$', '$0$', '$-1$'],
        correct: 2,
        explanation: '$f(0)=0$ is smaller than $f(-1)=1$ and $f(2)=4$.',
      },
      {
        question: 'If $f\'(c)=0$, then $c$ is called a:',
        options: ['Boundary point', 'Critical point', 'Saddle in 1D', 'Limit'],
        correct: 1,
        explanation: 'Zero derivative is the first-year definition of a critical point.',
      },
    ],
    practice: [
      {
        question: 'Find absolute extrema of $f(x)=x^2-4x+3$ on $[0,4]$.',
        steps: [
          '$f\'=2x-4=0\\Rightarrow x=2$.',
          '$f(0)=3$, $f(4)=3$, $f(2)=-1$.',
        ],
        answer: 'Max $3$, min $-1$',
      },
    ],
    cram: {
      top: [
        'The closed-set algorithm',
        'Power rule',
        'Factoring $f\'=0$',
        'Evaluating endpoints',
        'Comparing values',
      ],
      min30: 'One 1D closed-interval problem and one 2D outline.',
      min15: 'Recite the four algorithm steps.',
      min5: 'Critical points + endpoints.',
    },
  },
  {
    id: 'l18-19',
    number: '18–19',
    title: 'Integration and Multiple Integrals',
    shortTitle: 'Double integrals',
    overview:
      'Integration reverses differentiation. A definite integral is $F(b)-F(a)$. A double integral over a rectangle is an iterated integral: integrate the inner variable first, treating the other as constant, then integrate what remains.',
    takeaways: [
      'Power rule: $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$ ($n\\neq -1$).',
      'Work inside-out. Freeze the outer variable during the inner integral.',
      'On a rectangle, Fubini: $dx\\,dy$ and $dy\\,dx$ give the same number.',
    ],
    concepts: [
      {
        name: 'Definite integral',
        definition: 'Net area under $y=f(x)$ from $a$ to $b$.',
        explanation: 'Evaluate the antiderivative at the top limit and subtract the bottom.',
        why: 'Building block for every multiple integral.',
        priority: 'high',
      },
      {
        name: 'Double integral',
        definition: '$\\iint_R f(x,y)\\,dA$ over a region $R$.',
        explanation: 'Volume under $z=f(x,y)$ (when $f\\ge 0$).',
        why: 'The multivariable analogue of area.',
        priority: 'high',
      },
      {
        name: 'Iterated integral',
        definition: 'Two (or more) integrals nested: inner first, then outer.',
        explanation: 'Like nested brackets: finish the inside, then the outside.',
        why: 'This is how you actually compute a double integral.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Power rule',
        latex: '\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\quad(n\\neq -1)',
        meaning: 'Antiderivative of a monomial.',
        when: 'Any polynomial term.',
      },
      {
        name: 'Iterated double integral',
        latex: '\\int_{x=a}^{b}\\int_{y=c}^{d} f(x,y)\\,dy\\,dx',
        meaning: 'Inner $y$ from $c$ to $d$, then outer $x$ from $a$ to $b$.',
        when: 'Rectangular regions.',
      },
    ],
    methods: [
      {
        type: 'Double integral over a rectangle',
        recognize: 'Limits for $x$ and for $y$, and a function $f(x,y)$.',
        steps: [
          'Read the order: $dy\\,dx$ means $y$ first.',
          'Inner integral: treat the outer variable as a constant.',
          'Apply the inner limits.',
          'Integrate the remaining single-variable function.',
        ],
        example: {
          question: '$\\int_0^1\\int_0^2 (x+y)\\,dy\\,dx$.',
          solution: 'Inner: $[xy+y^2/2]_0^2=2x+2$. Outer: $[x^2+2x]_0^1=3$.',
        },
      },
    ],
    examples: [
      {
        question: 'Evaluate $\\int_0^1 x^2\\,dx$.',
        steps: ['$\\left[\\frac{x^3}{3}\\right]_0^1=\\frac13$.'],
        answer: '$\\dfrac{1}{3}$',
      },
      {
        question: 'Evaluate $\\int_0^2\\int_0^1 x\\,dy\\,dx$.',
        steps: [
          'Inner: $[xy]_0^1=x$.',
          'Outer: $\\int_0^2 x\\,dx=2$.',
        ],
        answer: '$2$',
      },
      {
        question: 'Evaluate $\\int_0^1\\int_0^2 (4-x-y)\\,dy\\,dx$.',
        steps: [
          'Inner: $[4y-xy-y^2/2]_0^2=8-2x-2=6-2x$.',
          'Outer: $[6x-x^2]_0^1=5$.',
        ],
        answer: '$5$',
      },
    ],
    traps: [
      'Omitting $+C$ on an indefinite integral.',
      'Treating the outer variable as a variable during the inner step.',
      'Subtracting limits in the wrong order.',
    ],
    memorize: [
      'Power rule $\\int x^n\\,dx=x^{n+1}/(n+1)$.',
      'FTC: $F(b)-F(a)$.',
    ],
    revision: [
      'Inside first.',
      'The other letter is a number.',
      'Upper minus lower.',
    ],
    mcqs: [
      {
        question: 'The indefinite integral of $1$ with respect to $x$ is:',
        options: ['$1$', '$x+C$', '$0$', '$dx$'],
        correct: 1,
        explanation: '$\\int x^0\\,dx=x+C$.',
      },
      {
        question: 'In $\\int_0^1\\int_0^2 x\\,dy\\,dx$, the inner integral equals:',
        options: ['$x$', '$2x$', '$2$', '$x^2$'],
        correct: 1,
        explanation: '$[xy]_0^2=2x$.',
      },
      {
        question: 'On a rectangle, does the order of integration change the value?',
        options: ['Yes, always', 'No (Fubini)', 'Only if $f$ is negative', 'Only for $x^2$'],
        correct: 1,
        explanation: 'Fubini’s theorem: the two iterated integrals agree.',
      },
      {
        question: '$\\int_0^2 2\\,dx$ equals:',
        options: ['$2$', '$4$', '$0$', '$1$'],
        correct: 1,
        explanation: '$[2x]_0^2=4$.',
      },
      {
        question: 'Treating $x$ as constant, $\\int (x+y)\\,dy$ is:',
        options: ['$xy+y^2/2+C$', '$x+y^2/2$', '$1+y$', '$x^2/2+xy$'],
        correct: 0,
        explanation: '$x$ behaves like a coefficient of $y$.',
      },
    ],
    practice: [
      {
        question: 'Evaluate $\\int_0^2\\int_0^1 y\\,dx\\,dy$.',
        steps: [
          'Inner: $[yx]_0^1=y$.',
          'Outer: $\\int_0^2 y\\,dy=2$.',
        ],
        answer: '$2$',
      },
      {
        question: 'Calculate $\\int_0^1 3x^2\\,dx$.',
        steps: ['$[x^3]_0^1=1$.'],
        answer: '$1$',
      },
    ],
    cram: {
      top: [
        'Power rule',
        'Inner integral first',
        'Fubini on rectangles',
        'Upper minus lower',
        'Freeze the other variable',
      ],
      min30: 'Three double integrals.',
      min15: 'Power rule and one iterated example.',
      min5: 'Inside-out: freeze the outer letter.',
    },
  },
]
