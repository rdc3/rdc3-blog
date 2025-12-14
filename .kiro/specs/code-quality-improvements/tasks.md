# Implementation Plan

- [x] 1. Fix Critical Timeline Overlap Issue

  - Remove problematic CSS rule causing 50% negative margin overlap
  - Implement proper spacing calculations for timeline entries
  - Test with multiple projects to ensure no visual overlap
  - _Requirements: 5.1, 5.2_

- [x] 1.1 Remove problematic CSS rule from tailwind.css

  - Locate and remove `.timeline-container > .timeline-child ~ .timeline-child { margin-top: -50%; }` rule
  - Replace with proper positive margin spacing
  - _Requirements: 5.1_

- [ ]\* 1.2 Write property test for timeline spacing

  - **Property 1: Timeline Non-Overlap**
  - **Validates: Requirements 5.1, 5.2**

- [x] 1.3 Implement responsive timeline spacing

  - Add responsive margin calculations for different screen sizes
  - Ensure proper spacing on mobile, tablet, and desktop
  - _Requirements: 5.4_

- [ ]\* 1.4 Write property test for responsive timeline behavior

  - **Property 3: Responsive Layout Consistency**
  - **Validates: Requirements 5.4**

- [x] 2. Fix TypeScript Type Safety Issues

  - Replace all `any` types with proper TypeScript interfaces
  - Add proper type definitions for external library hooks
  - Define explicit interfaces for component props
  - _Requirements: 1.2, 1.3_

- [x] 2.1 Create proper TypeScript interfaces for ScrollProvider

  - Define `LenisScrollData` interface for useLenis hook
  - Replace `any` type in ScrollProvider component
  - _Requirements: 1.2_

- [x] 2.2 Fix TypeScript types in Intro component

  - Replace `any` type in useLenis callback
  - Add proper event handler types
  - _Requirements: 1.2, 1.3_

- [ ]\* 2.3 Write property test for TypeScript type safety

  - **Property 2: TypeScript Type Safety**
  - **Validates: Requirements 1.2, 1.3**

- [x] 3. Improve Timeline Component Accessibility

  - Add proper alt text for timeline image
  - Implement semantic HTML structure
  - Add ARIA labels for interactive elements
  - _Requirements: 4.1, 4.2_

- [x] 3.1 Replace img tag with Next.js Image component

  - Convert timeline image from `<img>` to Next.js `<Image>`
  - Add proper alt text describing the timeline completion indicator
  - _Requirements: 8.1, 4.1_

- [ ] 3.2 Add proper ARIA labels and semantic HTML

  - Add role attributes for timeline navigation
  - Implement keyboard navigation support
  - _Requirements: 4.1, 4.2_

- [ ]\* 3.3 Write property test for accessibility compliance

  - **Property 4: Accessibility Compliance**
  - **Validates: Requirements 4.1, 4.2**

- [x] 4. Clean Up TimelineLayout Component

  - Remove commented-out code
  - Improve component structure and readability
  - Add proper error handling for missing data
  - _Requirements: 11.1, 7.1_

- [x] 4.1 Remove commented code from TimelineLayout

  - Clean up all commented JSX and unused imports
  - Remove unused state and function declarations
  - _Requirements: 11.1_

- [x] 4.2 Add error handling for missing project data

  - Implement graceful fallback when projects array is empty
  - Add loading states for MDX content rendering
  - _Requirements: 7.1, 7.3_

- [ ] 5. Checkpoint - Ensure all tests pass

  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Refactor Canvas Rendering Code

  - Convert renderCanvas.js to TypeScript
  - Replace legacy JavaScript patterns with modern syntax
  - Add proper error handling and cleanup
  - _Requirements: 2.2, 2.3, 7.4_

- [x] 6.1 Convert renderCanvas.js to TypeScript

  - Rename file to renderCanvas.ts
  - Add proper type definitions for canvas context and animation objects
  - _Requirements: 1.1, 2.2_

- [x] 6.2 Modernize JavaScript patterns in canvas code

  - Replace `var` with `const`/`let`
  - Use descriptive variable names instead of single letters
  - Add comments explaining complex mathematical calculations
  - _Requirements: 2.2, 2.3_

- [x] 6.3 Add proper cleanup for canvas animations

  - Implement proper cleanup in useEffect
  - Add error handling for missing canvas element
  - _Requirements: 3.3, 7.4_

- [ ]\* 6.4 Write unit tests for canvas rendering functions

  - Test animation initialization and cleanup
  - Test mouse/touch event handling
  - _Requirements: 9.1, 9.4_

- [-] 7. Optimize Performance and Images

  - Replace all img tags with Next.js Image components
  - Implement proper loading states
  - Add image optimization and lazy loading
  - _Requirements: 8.1, 8.2_

- [ ] 7.1 Audit and replace all img tags

  - Find all instances of `<img>` tags in components
  - Replace with Next.js `<Image>` component with proper optimization
  - _Requirements: 8.1_

- [ ]\* 7.2 Write property test for image optimization

  - **Property 5: Performance Optimization**
  - **Validates: Requirements 8.1, 8.2**

- [ ] 8. Improve CSS Organization and Consistency

  - Organize Tailwind classes in consistent order
  - Remove conflicting or redundant styles
  - Implement proper responsive design patterns
  - _Requirements: 6.1, 6.3_

- [ ] 8.1 Reorganize Tailwind CSS classes in components

  - Apply consistent class ordering (layout, spacing, typography, colors)
  - Remove redundant or conflicting classes
  - _Requirements: 6.1_

- [ ] 8.2 Implement consistent responsive patterns

  - Standardize breakpoint usage across components
  - Ensure consistent spacing and typography scales
  - _Requirements: 6.3_

- [ ] 9. Add Comprehensive Error Handling

  - Implement error boundaries for component failures
  - Add proper loading states for async operations
  - Create user-friendly error messages
  - _Requirements: 7.1, 7.2, 7.3_

- [ ] 9.1 Create error boundary component

  - Implement React error boundary for catching component errors
  - Add fallback UI for error states
  - _Requirements: 7.3_

- [ ] 9.2 Add loading states to async components

  - Implement skeleton screens for timeline loading
  - Add loading indicators for MDX content
  - _Requirements: 7.1_

- [ ]\* 9.3 Write integration tests for error handling

  - Test error boundary behavior
  - Test loading state transitions
  - _Requirements: 9.3_

- [ ] 10. Final Checkpoint - Make sure all tests are passing

  - Ensure all tests pass, ask the user if questions arise.
