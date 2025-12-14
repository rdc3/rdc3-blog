// Canvas animation system for interactive particle trails
// Converted from JavaScript to TypeScript with proper type definitions

interface WaveConfig {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineConfig {
  spring: number;
}

interface NodePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface CanvasConfig {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

interface Position {
  x: number;
  y: number;
}

interface ExtendedCanvasRenderingContext2D extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

// Wave generator class for color animation
class Wave {
  private phase: number = 0;
  private offset: number = 0;
  private frequency: number = 0.001;
  private amplitude: number = 1;
  private currentValue: number = 0;

  constructor(config: WaveConfig = {}) {
    this.init(config);
  }

  private init(config: WaveConfig): void {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.currentValue;
  }

  value(): number {
    return this.currentValue;
  }
}

// Node class representing a point in the trail
class Node implements NodePosition {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

// Line class representing a trail of connected nodes
class Line {
  private spring: number = 0;
  private friction: number = 0;
  private nodes: Node[] = [];

  constructor(config: LineConfig) {
    this.init(config);
  }

  private init(config: LineConfig): void {
    this.spring = config.spring + 0.1 * Math.random() - 0.05;
    this.friction = canvasConfig.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];

    for (let nodeIndex = 0; nodeIndex < canvasConfig.size; nodeIndex++) {
      const node = new Node();
      node.x = mousePosition.x;
      node.y = mousePosition.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let springForce = this.spring;
    const firstNode = this.nodes[0];

    // Update first node to follow mouse
    firstNode.vx += (mousePosition.x - firstNode.x) * springForce;
    firstNode.vy += (mousePosition.y - firstNode.y) * springForce;

    // Update all nodes with spring physics
    for (let nodeIndex = 0; nodeIndex < this.nodes.length; nodeIndex++) {
      const currentNode = this.nodes[nodeIndex];

      if (nodeIndex > 0) {
        const previousNode = this.nodes[nodeIndex - 1];
        currentNode.vx += (previousNode.x - currentNode.x) * springForce;
        currentNode.vy += (previousNode.y - currentNode.y) * springForce;
        currentNode.vx += previousNode.vx * canvasConfig.dampening;
        currentNode.vy += previousNode.vy * canvasConfig.dampening;
      }

      // Apply friction and update position
      currentNode.vx *= this.friction;
      currentNode.vy *= this.friction;
      currentNode.x += currentNode.vx;
      currentNode.y += currentNode.vy;

      springForce *= canvasConfig.tension;
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    if (this.nodes.length < 2) return;

    let controlPointX: number;
    let controlPointY: number;
    const currentX = this.nodes[0].x;
    const currentY = this.nodes[0].y;

    context.beginPath();
    context.moveTo(currentX, currentY);

    // Draw smooth curves between nodes
    for (let nodeIndex = 1; nodeIndex < this.nodes.length - 2; nodeIndex++) {
      const currentNode = this.nodes[nodeIndex];
      const nextNode = this.nodes[nodeIndex + 1];
      controlPointX = 0.5 * (currentNode.x + nextNode.x);
      controlPointY = 0.5 * (currentNode.y + nextNode.y);
      context.quadraticCurveTo(currentNode.x, currentNode.y, controlPointX, controlPointY);
    }

    // Handle last two nodes
    if (this.nodes.length >= 2) {
      const secondLastNode = this.nodes[this.nodes.length - 2];
      const lastNode = this.nodes[this.nodes.length - 1];
      context.quadraticCurveTo(secondLastNode.x, secondLastNode.y, lastNode.x, lastNode.y);
    }

    context.stroke();
    context.closePath();
  }
}

// Global variables with proper types
let canvasContext: ExtendedCanvasRenderingContext2D | null = null;
let colorWave: Wave;
let trailLines: Line[] = [];
const mousePosition: Position = { x: 0, y: 0 };

const canvasConfig: CanvasConfig = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

// Initialize trail lines
function initializeLines(): void {
  trailLines = [];
  for (let trailIndex = 0; trailIndex < canvasConfig.trails; trailIndex++) {
    trailLines.push(
      new Line({
        spring: 0.45 + (trailIndex / canvasConfig.trails) * 0.025,
      })
    );
  }
}

// Handle mouse and touch position updates
function updateMousePosition(event: MouseEvent | TouchEvent): void {
  if ('touches' in event && event.touches.length > 0) {
    mousePosition.x = event.touches[0].pageX;
    mousePosition.y = event.touches[0].pageY;
  } else if ('clientX' in event) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  }
  event.preventDefault();
}

// Handle touch start events
function handleTouchStart(event: TouchEvent): void {
  if (event.touches.length === 1) {
    mousePosition.x = event.touches[0].pageX;
    mousePosition.y = event.touches[0].pageY;
  }
}

// Initialize mouse/touch event listeners
function initializeEventListeners(initialEvent: MouseEvent | TouchEvent): void {
  // Remove initial listeners
  document.removeEventListener('mousemove', onInitialMouseMove);
  document.removeEventListener('touchstart', onInitialMouseMove);

  // Add active listeners
  document.addEventListener('mousemove', updateMousePosition);
  document.addEventListener('touchmove', updateMousePosition);
  document.addEventListener('touchstart', handleTouchStart);

  // Set initial position and start animation
  updateMousePosition(initialEvent);
  initializeLines();
  render();
}

// Initial mouse move handler
function onInitialMouseMove(event: MouseEvent | TouchEvent): void {
  initializeEventListeners(event);
}

// Main render loop
function render(): void {
  if (!canvasContext || !canvasContext.running) return;

  // Clear canvas
  canvasContext.globalCompositeOperation = 'source-over';
  canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);

  // Set up drawing style
  canvasContext.globalCompositeOperation = 'lighter';
  canvasContext.strokeStyle = `hsla(${Math.round(colorWave.update())},90%,50%,0.25)`;
  canvasContext.lineWidth = 1;

  // Update and draw all trails
  for (const line of trailLines) {
    line.update();
    line.draw(canvasContext);
  }

  canvasContext.frame++;
  window.requestAnimationFrame(render);
}

// Handle canvas resize
function resizeCanvas(): void {
  if (!canvasContext) return;

  canvasContext.canvas.width = window.innerWidth - 20;
  canvasContext.canvas.height = window.innerHeight;
}

// Main initialization function
export const renderCanvas = function (): (() => void) | null {
  const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;

  if (!canvasElement) {
    console.error('Canvas element with id "canvas" not found');
    return null;
  }

  const context = canvasElement.getContext('2d');
  if (!context) {
    console.error('Failed to get 2D context from canvas');
    return null;
  }

  // Initialize canvas context with extended properties
  canvasContext = context as ExtendedCanvasRenderingContext2D;
  canvasContext.running = true;
  canvasContext.frame = 1;

  // Initialize color wave
  colorWave = new Wave({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  // Set up event listeners
  document.addEventListener('mousemove', onInitialMouseMove);
  document.addEventListener('touchstart', onInitialMouseMove);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);

  // Handle window focus/blur for performance
  const handleFocus = (): void => {
    if (canvasContext && !canvasContext.running) {
      canvasContext.running = true;
      render();
    }
  };

  const handleBlur = (): void => {
    if (canvasContext) {
      canvasContext.running = false;
    }
  };

  window.addEventListener('focus', handleFocus);
  window.addEventListener('blur', handleBlur);

  // Initial resize
  resizeCanvas();

  // Return cleanup function
  return (): void => {
    if (canvasContext) {
      canvasContext.running = false;
    }

    document.removeEventListener('mousemove', onInitialMouseMove);
    document.removeEventListener('touchstart', onInitialMouseMove);
    document.removeEventListener('mousemove', updateMousePosition);
    document.removeEventListener('touchmove', updateMousePosition);
    document.removeEventListener('touchstart', handleTouchStart);
    document.body.removeEventListener('orientationchange', resizeCanvas);
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('focus', handleFocus);
    window.removeEventListener('blur', handleBlur);
  };
};
