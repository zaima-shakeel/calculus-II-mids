import type { Lecture } from './types'

export const lecturesB: Lecture[] = [
  {
    id: 'l7',
    number: '7',
    title: 'Geometric Meaning of Partial Derivatives',
    shortTitle: 'Geometry of partials',
    overview:
      '$f_x$ is the slope of the surface in the $x$-direction; $f_y$ is the slope in the $y$-direction. Second-order and mixed partials describe curvature. Clairaut’s theorem says $f_{xy}=f_{yx}$ when the mixed partials are continuous.',
    takeaways: [
      '$f_x$: slope along $x$. $f_y$: slope along $y$.',
      'Notation $f_{xy}$ means $x$ first, then $y$.',
      'Clairaut: $f_{xy}=f_{yx}$ for well-behaved functions.',
    ],
    concepts: [
      {
        name: 'Geometric meaning of $f_x$',
        definition: 'Rate of change of $f(x,y)$ while $y$ is held constant.',
        explanation: 'Walk only east-west on the surface; the slope of that path is $f_x$.',
        why: 'This is what a first partial actually measures on a graph $z=f(x,y)$.',
        priority: 'high',
      },
      {
        name: 'Mixed partials $f_{xy}$, $f_{yx}$',
        definition: 'Differentiate once, then differentiate the result with respect to the other variable.',
        explanation: '$f_{xy}=\\partial/\\partial y\\,(f_x)$.',
        why: 'Needed for Clairaut checks and later for the second-derivative test.',
        priority: 'high',
      },
      {
        name: 'Clairaut’s theorem',
        definition: 'If the mixed partials are continuous, then $f_{xy}=f_{yx}$.',
        explanation: 'Order of differentiation usually does not matter.',
        why: 'You can choose the easier order, and you can verify your algebra.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'First partial',
        latex: 'f_x=\\frac{\\partial f}{\\partial x}',
        meaning: 'Slope in the $x$-direction.',
        when: 'First-order questions and tangent slopes.',
      },
      {
        name: 'Second partial',
        latex: 'f_{xx}=\\frac{\\partial^2 f}{\\partial x^2}',
        meaning: 'How that $x$-slope itself changes; concavity in $x$.',
        when: 'Higher-order and mixed-derivative problems.',
      },
    ],
    methods: [
      {
        type: 'Finding $f_{xy}$',
        steps: [
          'Compute $f_x$, treating $y$ as constant.',
          'Differentiate that result with respect to $y$, treating $x$ as constant.',
          'Simplify.',
        ],
        example: {
          question: '$f(x,y)=x^2 y+y^2$.',
          solution: '$f_x=2xy$, then $f_{xy}=2x$.',
        },
      },
    ],
    examples: [
      {
        question: 'Find $f_x$ and $f_y$ for $f(x,y)=\\sin(x/y)$.',
        steps: [
          '$f_x=\\cos(x/y)\\cdot(1/y)=\\frac{1}{y}\\cos(x/y)$.',
          '$f_y=\\cos(x/y)\\cdot(-x/y^2)=-\\frac{x}{y^2}\\cos(x/y)$.',
        ],
        answer: '$f_x=\\frac1y\\cos(x/y)$, $f_y=-\\frac{x}{y^2}\\cos(x/y)$',
      },
      {
        question: 'Verify Clairaut’s theorem for $f(x,y)=e^x\\sin y$.',
        steps: [
          '$f_x=e^x\\sin y$, so $f_{xy}=e^x\\cos y$.',
          '$f_y=e^x\\cos y$, so $f_{yx}=e^x\\cos y$.',
          'Equal, so Clairaut holds.',
        ],
        answer: 'Verified: $f_{xy}=f_{yx}=e^x\\cos y$',
      },
    ],
    traps: [
      'Forgetting the inner derivative of $x/y$.',
      'Treating $x$ as a variable when computing a $y$-partial.',
      'Sign errors with negative exponents such as $y^{-1}$.',
    ],
    memorize: [
      '$f_x$ freezes $y$; $f_y$ freezes $x$.',
      'Clairaut: $f_{xy}=f_{yx}$.',
      '$f_{xy}$ means $x$ first.',
    ],
    revision: [
      'First partials are directional slopes along the axes.',
      'Mixed order is usually interchangeable.',
    ],
    mcqs: [
      {
        question: 'The geometric meaning of $f_x$ is:',
        options: ['Slope in the $y$-direction', 'Slope in the $x$-direction', 'Area', 'Volume'],
        correct: 1,
        explanation: '$f_x$ is the slope of the surface along $x$.',
      },
      {
        question: 'If $f(x,y)=x^2 y$, then $f_x$ is:',
        options: ['$x^2$', '$2xy$', '$y$', '$2x$'],
        correct: 1,
        explanation: 'Power rule on $x^2$, $y$ stays as a multiplier.',
      },
      {
        question: 'Clairaut’s theorem states that:',
        options: ['$f_x=f_y$', '$f_{xy}=f_{yx}$', '$f_{xx}=f_{yy}$', 'None'],
        correct: 1,
        explanation: 'Mixed partials agree when they are continuous.',
      },
      {
        question: 'If $f(x,y)=e^x$, then $f_y$ is:',
        options: ['$e^x$', '$0$', '$e^y$', '$1$'],
        correct: 1,
        explanation: 'No $y$ appears, so the $y$-partial is zero.',
      },
      {
        question: 'The partial derivative of a constant is:',
        options: ['$1$', '$0$', '$x$', '$y$'],
        correct: 1,
        explanation: 'Constants do not change.',
      },
    ],
    practice: [
      {
        question: 'Find $f_x$ and $f_y$ for $f(x,y)=x^2+2xy+y^2$.',
        steps: ['$f_x=2x+2y$', '$f_y=2x+2y$'],
        answer: '$f_x=f_y=2x+2y$',
      },
      {
        question: 'If $f(x,y)=x^3 y^2$, find $f_{xy}$.',
        steps: ['$f_x=3x^2 y^2$', '$f_{xy}=6x^2 y$'],
        answer: '$6x^2 y$',
      },
      {
        question: 'For $f(x,y)=x^3+y^3$, find $f_{xx}$ and $f_{yy}$.',
        steps: ['$f_x=3x^2\\Rightarrow f_{xx}=6x$', '$f_y=3y^2\\Rightarrow f_{yy}=6y$'],
        answer: '$f_{xx}=6x$, $f_{yy}=6y$',
      },
    ],
    cram: {
      top: [
        'First partials $f_x$, $f_y$',
        'Mixed partial $f_{xy}$',
        'Chain rule',
        'Clairaut’s theorem',
        'Treat the other variable as constant',
      ],
      min30: 'Ten first partials and five mixed partials.',
      min15: 'Rules plus Clairaut.',
      min5: '$f_x$ = slope in $x$; $f_y$ = slope in $y$.',
    },
  },
  {
    id: 'l8',
    number: '8',
    title: 'Partial Derivatives and the Chain Rule',
    shortTitle: 'Chain rule I',
    overview:
      'When $w=f(x,y)$ and both $x$ and $y$ depend on $t$, the total derivative is the sum of each partial times the corresponding ordinary derivative. Partials still freeze the other variables.',
    takeaways: [
      '$\\dfrac{dw}{dt}=w_x\\dfrac{dx}{dt}+w_y\\dfrac{dy}{dt}$.',
      'A term with no $x$ has $f_x=0$.',
      'After differentiating, substitute $x(t)$ and $y(t)$ if the answer must be in $t$ only.',
    ],
    concepts: [
      {
        name: 'Partial derivative',
        definition: 'Derivative in one variable with the others held fixed.',
        explanation: 'For $f(x,y)$, $f_x$ freezes $y$ like a number.',
        why: 'Needed before you can write any chain-rule formula.',
        priority: 'high',
      },
      {
        name: 'Multivariate chain rule',
        definition: 'If $w=f(x,y)$ and $x=x(t)$, $y=y(t)$, then $dw/dt=w_x x\'+w_y y\'$.',
        explanation: 'Each input channel contributes its own rate.',
        why: 'Standard related-rates setup in several variables.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Chain rule in $t$',
        latex: '\\frac{dw}{dt}=\\frac{\\partial w}{\\partial x}\\frac{dx}{dt}+\\frac{\\partial w}{\\partial y}\\frac{dy}{dt}',
        meaning: 'Total rate of $w$ when both inputs move with $t$.',
        when: '$w$ depends on $x,y$ and both depend on $t$.',
      },
    ],
    methods: [
      {
        type: 'Computing a first partial',
        recognize: 'The question asks for $f_x$ or $\\partial f/\\partial x$.',
        steps: [
          'Identify the differentiation variable.',
          'Treat every other letter as a constant.',
          'Use power, product, or chain rule.',
        ],
        example: {
          question: '$f(x,y)=x^2 y+\\sin x$. Find $f_x$.',
          solution: '$2xy+\\cos x$.',
        },
      },
    ],
    examples: [
      {
        question: 'Find $f_y$ for $f(x,y)=e^{xy}$.',
        steps: ['$f_y=e^{xy}\\cdot x=x e^{xy}$.'],
        answer: '$x e^{xy}$',
      },
      {
        question: 'Use the chain rule: $w=x^2+y^2$, $x=\\cos t$, $y=\\sin t$. Find $dw/dt$.',
        steps: [
          '$w_x=2x$, $w_y=2y$.',
          '$dx/dt=-\\sin t$, $dy/dt=\\cos t$.',
          '$dw/dt=2x(-\\sin t)+2y(\\cos t)$.',
          'Substitute: $-2\\cos t\\sin t+2\\sin t\\cos t=0$.',
        ],
        answer: '$0$',
      },
      {
        question: 'Given $f(x,y)=x^3+y^2+5xy$, find $f_x(1,2)$.',
        steps: ['$f_x=3x^2+5y$', '$f_x(1,2)=3+10=13$'],
        answer: '$13$',
      },
    ],
    traps: [
      'Writing a partial when you needed a total derivative $d/dt$.',
      'Dropping the product rule.',
      'Sign errors on trigonometric derivatives.',
    ],
    memorize: [
      '$dw/dt=f_x\\,dx/dt+f_y\\,dy/dt$.',
      'Derivative of $e^{ax}$ is $a e^{ax}$.',
    ],
    revision: [
      'Differentiate one letter; freeze the rest.',
      'Use the chain rule when a third parameter $t$ appears.',
    ],
    mcqs: [
      {
        question: 'If $f(x,y)=x^2$, what is $f_y$?',
        options: ['$2x$', '$0$', '$2y$', '$1$'],
        correct: 1,
        explanation: 'No $y$ appears, so the partial is $0$.',
      },
      {
        question: 'The chain-rule formula for $w(x,y)$ with $x(t), y(t)$ is:',
        options: [
          '$w_x+w_y$',
          '$w_x\\,x\'+w_y\\,y\'$',
          '$w_x w_y$',
          '$w_x$ only',
        ],
        correct: 1,
        explanation: 'Sum the two channels.',
      },
      {
        question: 'If $f(x,y)=xy+\\ln x$, then $f_x$ is:',
        options: ['$y$', '$y+1/x$', '$x+1/y$', '$1/x$'],
        correct: 1,
        explanation: 'Product on $xy$ plus the log rule.',
      },
    ],
    practice: [
      {
        question: 'Find $dw/dt$ if $w=x+y$, $x=t^2$, $y=t^3$.',
        steps: [
          '$w_x=1$, $w_y=1$.',
          '$dx/dt=2t$, $dy/dt=3t^2$.',
          '$dw/dt=2t+3t^2$.',
        ],
        answer: '$2t+3t^2$',
      },
    ],
    cram: {
      top: [
        'First partials',
        'Product rule on partials',
        'Chain-rule formula',
        'Evaluating partials at a point',
        'Recognizing constants',
      ],
      min30: 'Mixed partials: trig, exp, polynomial.',
      min15: 'Write the chain-rule formula and redo $x^2+y^2$ on the circle.',
      min5: 'Memorize $dw/dt=f_x x\'+f_y y\'$.',
    },
  },
  {
    id: 'l9',
    number: '9',
    title: 'Chain Rule and Multivariable Derivatives',
    shortTitle: 'Chain rule II',
    overview:
      'Extend the chain rule to three inputs, and to the case where $x$ and $y$ themselves depend on two variables $r$ and $s$. Pair each outer partial with the matching inner derivative. Tree diagrams keep the pairings straight.',
    takeaways: [
      'One parameter $t$: use ordinary $d$.',
      'Several parameters $r,s$: use partial $\\partial$.',
      'Three inputs give three terms in $dw/dt$.',
    ],
    concepts: [
      {
        name: 'Single-parameter chain rule',
        definition: 'If $w=f(x,y)$ and $x=x(t)$, $y=y(t)$, then $dw/dt=w_x x\'+w_y y\'$.',
        explanation: 'Sum outer-partial times inner-rate for every input.',
        why: 'Time-dependent composite functions.',
        priority: 'high',
      },
      {
        name: 'Two-parameter chain rule',
        definition: 'If $x=x(r,s)$ and $y=y(r,s)$, then $\\partial w/\\partial r=w_x x_r+w_y y_r$.',
        explanation: 'Freeze $s$ while differentiating with respect to $r$.',
        why: 'Needed for later gradient and optimization work.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Three variables, one parameter',
        latex: '\\frac{dw}{dt}=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}+f_z\\frac{dz}{dt}',
        meaning: 'Three channels into $t$.',
        when: '$w=f(x,y,z)$ and each of $x,y,z$ depends on $t$.',
      },
      {
        name: 'Two parameters',
        latex: '\\frac{\\partial w}{\\partial r}=\\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial r}+\\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial r}',
        meaning: 'Partial of $w$ in the $r$ direction.',
        when: 'Inputs depend on $(r,s)$.',
      },
    ],
    methods: [
      {
        type: 'Finding $dw/dt$ for a composite',
        recognize: 'Given $w=f(x,y)$ and formulas for $x(t)$, $y(t)$.',
        steps: [
          'Compute $f_x$ and $f_y$.',
          'Compute $dx/dt$ and $dy/dt$.',
          'Form $f_x x\'+f_y y\'$.',
          'Substitute $x(t)$ and $y(t)$ if required.',
        ],
      },
    ],
    examples: [
      {
        question: 'Find $dw/dt$ for $w=xy$ with $x=t^2$, $y=t^3$.',
        steps: [
          '$f_x=y=t^3$, $f_y=x=t^2$.',
          '$x\'=2t$, $y\'=3t^2$.',
          '$dw/dt=(t^3)(2t)+(t^2)(3t^2)=2t^4+3t^4=5t^4$.',
        ],
        answer: '$5t^4$',
      },
      {
        question: 'If $w=\\ln(x^2+y^2)$, $x=r+s$, $y=r-s$, find $\\partial w/\\partial r$.',
        steps: [
          '$w_x=\\frac{2x}{x^2+y^2}$, $w_y=\\frac{2y}{x^2+y^2}$.',
          '$x_r=1$, $y_r=1$.',
          '$\\partial w/\\partial r=\\frac{2(x+y)}{x^2+y^2}$.',
          'After substitution: $\\frac{2r}{r^2+s^2}$.',
        ],
        answer: '$\\dfrac{2r}{r^2+s^2}$',
      },
    ],
    traps: [
      'Using $\\partial$ for $dx/dt$ (or $d$ for $x_r$).',
      'Forgetting to multiply by the inner derivative.',
      'Stopping before substituting back to $t$ or $(r,s)$.',
    ],
    memorize: [
      '$dw/dt=w_x x\'+w_y y\'$.',
      'Tree diagrams: one branch per input.',
    ],
    revision: [
      'Chain rule = sum of (outer partial $\\times$ inner derivative).',
      'Linked to $t$: ordinary derivatives. Linked to $r,s$: partials.',
    ],
    mcqs: [
      {
        question: 'If $w=f(x,y)$ and $x=t$, $y=t$, then $dw/dt$ equals:',
        options: ['$f_x+f_y$', '$f_x f_y$', '$f_x$', '$f_y$'],
        correct: 0,
        explanation: 'Both inner derivatives are $1$.',
      },
      {
        question: 'The chain rule for $w=f(x,y,z)$ with $x,y,z$ depending on $t$ has how many terms?',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correct: 2,
        explanation: 'One term per input variable.',
      },
      {
        question: 'If $w=x^2$ and $x=t^2$, then $dw/dt$ is:',
        options: ['$2t^2$', '$4t^3$', '$2t^4$', '$4t^2$'],
        correct: 1,
        explanation: '$2x\\cdot 2t=2(t^2)(2t)=4t^3$.',
      },
    ],
    practice: [
      {
        question: 'Find $dw/dt$ for $w=e^{xy}$ where $x=t$ and $y=t^2$.',
        steps: [
          '$w_x=y e^{xy}$, $w_y=x e^{xy}$.',
          '$x\'=1$, $y\'=2t$.',
          '$ye^{xy}+x e^{xy}(2t)$.',
          'Substitute: $t^2 e^{t^3}+2t^2 e^{t^3}=3t^2 e^{t^3}$.',
        ],
        answer: '$3t^2 e^{t^3}$',
      },
    ],
    cram: {
      top: [
        'Two-variable chain rule',
        'Three-variable chain rule',
        'Composite functions',
        'Substitute back',
        'Ordinary vs partial',
      ],
      min30: 'Several two-variable $dw/dt$ problems.',
      min15: 'Write the formula and compute one full example.',
      min5: 'Memorize $dw/dt=f_x x\'+f_y y\'$.',
    },
  },
  {
    id: 'l10',
    number: '10',
    title: 'Introduction to Vectors',
    shortTitle: 'Vectors',
    overview:
      'Scalars have size only; vectors have size and direction. You need magnitude, the unit-vector basis $\\mathbf{i},\\mathbf{j},\\mathbf{k}$, the dot product (a scalar), and the cross product (a perpendicular vector).',
    takeaways: [
      '$|\\mathbf{A}|=\\sqrt{x^2+y^2+z^2}$.',
      'Dot product $0$ $\\Leftrightarrow$ perpendicular. Cross product $0$ $\\Leftrightarrow$ parallel.',
      'Cross product uses a $3\\times 3$ determinant; remember the minus on the $\\mathbf{j}$ term.',
    ],
    concepts: [
      {
        name: 'Scalar vs vector',
        definition: 'Scalars have magnitude only; vectors have magnitude and direction.',
        explanation: 'Time is a scalar; force is a vector.',
        why: 'Tells you which operations are legal.',
        priority: 'high',
      },
      {
        name: 'Magnitude',
        definition: 'The length of a vector.',
        explanation: 'For $a=x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}$, $|a|=\\sqrt{x^2+y^2+z^2}$.',
        why: 'Needed for unit vectors, angles, and normalizing direction ratios.',
        priority: 'high',
      },
      {
        name: 'Dot product',
        definition: 'A product of two vectors that returns a scalar: $\\mathbf{A}\\cdot\\mathbf{B}=|A||B|\\cos\\theta$.',
        explanation: 'Also $A_1B_1+A_2B_2+A_3B_3$.',
        why: 'Angles, projections, orthogonality tests.',
        priority: 'high',
      },
      {
        name: 'Cross product',
        definition: 'A product that returns a vector perpendicular to both factors.',
        explanation: 'Its magnitude is the area of the parallelogram they span.',
        why: 'Normals to planes and areas in 3D.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Magnitude',
        latex: '|\\mathbf{A}|=\\sqrt{x^2+y^2+z^2}',
        meaning: 'Length of the vector.',
        when: 'Any “find the magnitude / unit vector” question.',
      },
      {
        name: 'Dot product',
        latex: '\\mathbf{A}\\cdot\\mathbf{B}=A_1B_1+A_2B_2+A_3B_3',
        meaning: 'Sum of componentwise products.',
        when: 'Angles, work, perpendicular test.',
      },
      {
        name: 'Cross product',
        latex: '\\mathbf{A}\\times\\mathbf{B}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\A_1&A_2&A_3\\\\B_1&B_2&B_3\\end{vmatrix}',
        meaning: 'Determinant expansion; result is a vector.',
        when: 'Normal vector or parallelogram area.',
      },
    ],
    methods: [
      {
        type: 'Dot product',
        steps: [
          'Write components of $\\mathbf{A}$ and $\\mathbf{B}$.',
          'Multiply matching components.',
          'Add.',
        ],
        example: {
          question: '$\\mathbf{A}=2\\mathbf{i}+3\\mathbf{j}$, $\\mathbf{B}=\\mathbf{i}-2\\mathbf{j}$.',
          solution: '$2-6=-4$.',
        },
      },
    ],
    examples: [
      {
        question: 'Magnitude of $\\mathbf{A}=3\\mathbf{i}+4\\mathbf{j}+12\\mathbf{k}$.',
        steps: ['$\\sqrt{9+16+144}=\\sqrt{169}=13$.'],
        answer: '$13$',
      },
      {
        question: 'Dot product of $\\mathbf{A}=\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}$ and $\\mathbf{B}=4\\mathbf{i}+5\\mathbf{j}+6\\mathbf{k}$.',
        steps: ['$4+10+18=32$.'],
        answer: '$32$',
      },
      {
        question: 'Find $\\mathbf{A}\\times\\mathbf{B}$ for $\\mathbf{A}=\\mathbf{i}+\\mathbf{j}+\\mathbf{k}$, $\\mathbf{B}=2\\mathbf{i}-\\mathbf{j}+\\mathbf{k}$.',
        steps: [
          '$\\mathbf{i}(1-(-1))-\\mathbf{j}(1-2)+\\mathbf{k}(-1-2)$.',
          '$2\\mathbf{i}+\\mathbf{j}-3\\mathbf{k}$.',
        ],
        answer: '$2\\mathbf{i}+\\mathbf{j}-3\\mathbf{k}$',
      },
    ],
    traps: [
      'Forgetting the minus in front of the $\\mathbf{j}$ cofactor.',
      'Calling a dot product a vector, or a cross product a scalar.',
      '$\\mathbf{i}\\cdot\\mathbf{i}=1$ but $\\mathbf{i}\\cdot\\mathbf{j}=0$.',
    ],
    memorize: [
      'Magnitude formula.',
      'Perpendicular $\\Leftrightarrow$ dot product $0$.',
      'Parallel $\\Leftrightarrow$ cross product $\\mathbf{0}$.',
    ],
    revision: [
      'Dot = sum of products = scalar.',
      'Cross = determinant = vector.',
    ],
    mcqs: [
      {
        question: 'The dot product of perpendicular vectors is:',
        options: ['$1$', '$0$', '$-1$', 'undefined'],
        correct: 1,
        explanation: '$\\cos 90^\\circ=0$.',
      },
      {
        question: 'Which product returns a vector?',
        options: ['Dot product', 'Scalar product', 'Cross product', 'Neither'],
        correct: 2,
        explanation: 'The cross product is a vector.',
      },
      {
        question: '$\\mathbf{i}\\times\\mathbf{j}$ equals:',
        options: ['$\\mathbf{0}$', '$\\mathbf{i}$', '$\\mathbf{j}$', '$\\mathbf{k}$'],
        correct: 3,
        explanation: 'Right-hand rule: $\\mathbf{i}\\times\\mathbf{j}=\\mathbf{k}$.',
      },
      {
        question: '$|2\\mathbf{i}-2\\mathbf{j}+\\mathbf{k}|$ is:',
        options: ['$3$', '$5$', '$9$', '$1$'],
        correct: 0,
        explanation: '$\\sqrt{4+4+1}=3$.',
      },
    ],
    practice: [
      {
        question: 'Find $|2\\mathbf{i}-2\\mathbf{j}+\\mathbf{k}|$.',
        steps: ['$\\sqrt{4+4+1}=3$.'],
        answer: '$3$',
      },
      {
        question: 'Compute $\\mathbf{i}\\times\\mathbf{j}$.',
        steps: ['Standard basis: $\\mathbf{i}\\times\\mathbf{j}=\\mathbf{k}$.'],
        answer: '$\\mathbf{k}$',
      },
    ],
    cram: {
      top: [
        'Magnitude',
        'Dot product',
        'Cross product',
        'Determinant expansion',
        'Orthogonality: dot $=0$',
      ],
      min30: 'Three dots and three crosses.',
      min15: 'Memorize the determinant expansion.',
      min5: 'Memorize the magnitude formula.',
    },
  },
  {
    id: 'l12',
    number: '12',
    title: 'Tangent Planes to Surfaces',
    shortTitle: 'Tangent planes',
    overview:
      'The tangent plane touches a surface at one point. Its normal is the gradient $\\nabla f=(f_x,f_y,f_z)$ evaluated at that point. Write the surface as $f(x,y,z)=c$ (or $f-z=0$ if $z=g(x,y)$), then use the point-normal equation.',
    takeaways: [
      'Formula: $f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$.',
      'Evaluate the partials at the given point first.',
      'For $z=g(x,y)$, use $F=g-z$ so $F_z=-1$.',
    ],
    concepts: [
      {
        name: 'Tangent plane',
        definition: 'The plane that touches the surface at a point and has normal parallel to $\\nabla f$ there.',
        explanation: 'The 3D analogue of a tangent line.',
        why: 'Linear approximation of a surface, and a frequent 5-mark question.',
        priority: 'high',
      },
      {
        name: 'Normal vector (gradient)',
        definition: '$\\nabla f=(f_x,f_y,f_z)$, pointing in the direction of steepest ascent.',
        explanation: 'It is perpendicular to every tangent direction, hence to the tangent plane.',
        why: 'Without $\\nabla f$ you cannot write the plane.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Tangent plane',
        latex: 'f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0',
        meaning: 'Point-normal form with normal $\\nabla f(P)$.',
        when: 'Any tangent-plane question at a specified point.',
      },
    ],
    methods: [
      {
        type: 'Equation of a tangent plane',
        recognize: 'A surface $f(x,y,z)=c$ and a point $P(x_0,y_0,z_0)$.',
        steps: [
          'Compute $f_x$, $f_y$, $f_z$.',
          'Evaluate them at $P$ to get numerical normal components.',
          'Insert into $f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$.',
          'Simplify to $Ax+By+Cz=D$.',
        ],
        example: {
          question: '$9x^2+y^2-z^2=0$ at $(2,3,6)$.',
          solution: 'Partials $18x,2y,-2z$ become $36,6,-12$. Plane simplifies to $6x+y-2z=3$.',
        },
      },
    ],
    examples: [
      {
        question: 'Tangent plane to $f(x,y)=e^x\\sin y$ at $(0,0,0)$.',
        steps: [
          'Write $F=e^x\\sin y-z$. Then $F_x=e^x\\sin y$, $F_y=e^x\\cos y$, $F_z=-1$.',
          'At the origin: $0$, $1$, $-1$.',
          '$y-z=0$, so $y=z$.',
        ],
        answer: '$y=z$',
      },
      {
        question: 'Tangent plane to $x^2+y^2+z^2=9$ at $(1,2,2)$.',
        steps: [
          '$f_x=2x$, $f_y=2y$, $f_z=2z$.',
          'At the point: $2,4,4$.',
          '$2(x-1)+4(y-2)+4(z-2)=0\\Rightarrow x+2y+2z=9$.',
        ],
        answer: '$x+2y+2z=9$',
      },
    ],
    traps: [
      'Forgetting to move every term to one side before differentiating.',
      'Sign errors, especially $F_z=-1$ when $z=g(x,y)$.',
      'Leaving the gradient as the answer instead of writing the plane.',
    ],
    memorize: [
      '$f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$.',
      '$\\nabla f$ is perpendicular to the tangent plane.',
    ],
    revision: [
      'Compute $\\nabla f$ at the point, then plug into the plane formula.',
      'Simplify the linear equation.',
    ],
    mcqs: [
      {
        question: 'The vector normal to the tangent plane of $f(x,y,z)=c$ is:',
        options: ['A unit tangent', 'The gradient $\\nabla f$', '$(x,y,z)$', '$(1,1,1)$'],
        correct: 1,
        explanation: '$\\nabla f$ is the surface normal.',
      },
      {
        question: 'If $f_x=2$, $f_y=3$, $f_z=4$ at $(1,1,1)$, the plane is:',
        options: [
          '$2x+3y+4z=0$',
          '$2(x-1)+3(y-1)+4(z-1)=0$',
          '$x+y+z=1$',
          '$2x+3y+4z=1$',
        ],
        correct: 1,
        explanation: 'Point-normal form at $(1,1,1)$.',
      },
      {
        question: 'Does the gradient point along the surface normal?',
        options: ['Yes', 'No', 'Only in 2D', 'Only if $f_z=0$'],
        correct: 0,
        explanation: 'That is the definition of $\\nabla f$ on a level surface.',
      },
      {
        question: 'If $f_x=0$ at the point of tangency, the plane:',
        options: [
          'Has no $x$ term',
          'Does not exist',
          'Is vertical',
          'Must be $x=0$',
        ],
        correct: 0,
        explanation: 'The $x$-coefficient vanishes.',
      },
    ],
    practice: [
      {
        question: 'Find a normal vector to $x^2+y^2=4$ at $(1,\\sqrt{3})$.',
        steps: ['$f_x=2x$, $f_y=2y$.', 'At the point: $(2,2\\sqrt{3})$.'],
        answer: '$(2, 2\\sqrt{3})$',
      },
      {
        question: 'Write the tangent-plane formula at $(x_0,y_0,z_0)$.',
        steps: ['$f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$.'],
        answer: '$f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$',
      },
    ],
    cram: {
      top: [
        'Tangent-plane formula',
        'Computing partials',
        'Evaluating at the point',
        'Rewrite as $f=0$',
        'Simplify $Ax+By+Cz=D$',
      ],
      min30: 'Three full surface-to-plane problems.',
      min15: 'Evaluate gradients at given points.',
      min5: 'Memorize $f_x(x-x_0)+f_y(y-y_0)+f_z(z-z_0)=0$.',
    },
  },
]
