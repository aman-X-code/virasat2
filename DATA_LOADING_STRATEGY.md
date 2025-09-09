# Data Loading Strategy for Events

This document outlines the optimized data loading strategy implemented for the Virasat Festival events page.

## Overview

The events page previously loaded all 56 events at once, which could cause performance issues. The new strategy implements:

1. **Pagination**: Load 1-2 days worth of events at a time
2. **Infinite Scroll**: Automatically load more events as user scrolls
3. **Static Generation (SSG)**: Pre-generate static data for better performance
4. **Optimized Caching**: Implement proper caching strategies

## Architecture

### 1. Centralized Data Management (`lib/events.ts`)

- **Single source of truth** for all events data
- **Type-safe interfaces** for Event objects
- **API simulation functions** with realistic delays
- **Filtering and pagination logic**

```typescript
// Key functions:
- getEventsByDay(page, daysPerPage, filters) // Load events by day with pagination
- getCategories() // Get all unique categories
- getDays() // Get all unique days
- getFeaturedEvents() // Get featured events only
```

### 2. Static Site Generation (`lib/events-ssg.ts`)

- **Pre-computed static data** for faster initial loads
- **Cache key management** for different data views
- **Revalidation strategies** for fresh data
- **Static path generation** for all events

```typescript
// Key features:
- staticEventsData // Pre-computed data object
- generateStaticEventPaths() // Generate paths for all events
- getStaticEventsProps() // Get static props for pages
- cacheKeys // Centralized cache key management
```

### 3. Custom Hooks (`hooks/useEvents.ts`)

- **useEvents()**: Main hook for events list with pagination
- **useEvent()**: Hook for individual event data
- **useFeaturedEvents()**: Hook for featured events only

```typescript
// useEvents hook features:
- Automatic pagination
- Infinite scroll support
- Filter management
- Loading states
- Error handling
- Memoized computed values
```

## Implementation Details

### Pagination Strategy

```typescript
// Load 2 days at a time (configurable)
const response = await getEventsByDay(page, 2, filters)

// Results in:
// Page 1: Day 1, Day 2
// Page 2: Day 3, Day 4
// Page 3: Day 5, Day 6
// etc.
```

### Infinite Scroll Implementation

```typescript
// Intersection Observer for automatic loading
useEffect(() => {
  observerRef.current = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasMore && !loadingMore) {
        loadMoreEvents()
      }
    },
    { threshold: 0.1 }
  )
}, [hasMore, loadingMore, loadMoreEvents])
```

### Filter Management

```typescript
// Filters are applied at the API level
const filters: EventsFilters = {
  category: selectedCategory === "All" ? undefined : selectedCategory,
  day: selectedDay === "All" ? undefined : selectedDay,
}
```

## Performance Benefits

### Before (Loading All Events)
- ❌ Loads 56 events at once
- ❌ Large initial bundle size
- ❌ Slower initial page load
- ❌ Higher memory usage
- ❌ Poor mobile performance

### After (Optimized Loading)
- ✅ Loads 2 days (4-8 events) at a time
- ✅ Smaller initial bundle
- ✅ Faster initial page load
- ✅ Lower memory usage
- ✅ Better mobile performance
- ✅ Infinite scroll for seamless UX
- ✅ Static generation for even better performance

## Usage Examples

### Basic Events List with Pagination

```typescript
import { useEvents } from '@/hooks/useEvents'

function EventsPage() {
  const {
    events,
    eventsByDay,
    loading,
    hasMore,
    loadMore,
    categories,
    days
  } = useEvents({
    pageSize: 2, // 2 days at a time
    enableInfiniteScroll: true
  })

  return (
    <div>
      {loading && <LoadingSpinner />}
      {Object.entries(eventsByDay).map(([day, dayEvents]) => (
        <DaySection key={day} day={day} events={dayEvents} />
      ))}
      {hasMore && <LoadMoreButton onClick={loadMore} />}
    </div>
  )
}
```

### Filtered Events

```typescript
function FilteredEvents() {
  const { events, updateFilters } = useEvents()

  const handleCategoryChange = (category: string) => {
    updateFilters({ category })
  }

  return (
    <div>
      <CategoryFilter onChange={handleCategoryChange} />
      <EventsList events={events} />
    </div>
  )
}
```

### Individual Event

```typescript
import { useEvent } from '@/hooks/useEvents'

function EventPage({ eventId }: { eventId: number }) {
  const { event, loading, error } = useEvent(eventId)

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  if (!event) return <NotFound />

  return <EventDetails event={event} />
}
```

## Caching Strategy

### Client-Side Caching
- **React Query** or **SWR** for client-side caching
- **Memoized computed values** to prevent unnecessary recalculations
- **Optimistic updates** for better UX

### Server-Side Caching
- **Static generation** for initial data
- **ISR (Incremental Static Regeneration)** for fresh data
- **CDN caching** for static assets

### Cache Keys
```typescript
const cacheKeys = {
  events: 'events:all',
  eventsByDay: (day: string) => `events:day:${day}`,
  eventsByCategory: (category: string) => `events:category:${category}`,
  featuredEvents: 'events:featured',
  eventById: (id: number) => `event:${id}`
}
```

## Future Enhancements

1. **Real API Integration**: Replace mock data with real API calls
2. **Search Functionality**: Add full-text search across events
3. **Advanced Filtering**: Date range, price range, location filters
4. **Offline Support**: Service worker for offline event browsing
5. **Analytics**: Track user interaction with events
6. **A/B Testing**: Test different pagination sizes and loading strategies

## Migration Guide

### From Old Implementation

1. **Replace direct data access**:
   ```typescript
   // Old
   const events = allEvents
   
   // New
   const { events } = useEvents()
   ```

2. **Update imports**:
   ```typescript
   // Old
   import { allEvents } from './events-data'
   
   // New
   import { useEvents } from '@/hooks/useEvents'
   ```

3. **Handle loading states**:
   ```typescript
   // Old
   return <EventsList events={allEvents} />
   
   // New
   const { events, loading } = useEvents()
   if (loading) return <LoadingSpinner />
   return <EventsList events={events} />
   ```

## Testing

### Unit Tests
- Test pagination logic
- Test filtering functionality
- Test infinite scroll behavior
- Test error handling

### Integration Tests
- Test complete user flows
- Test performance with large datasets
- Test mobile responsiveness

### Performance Tests
- Measure initial load time
- Measure memory usage
- Test with slow network conditions
- Test with large numbers of events

## Monitoring

### Key Metrics
- **Initial Load Time**: Time to first contentful paint
- **Time to Interactive**: When page becomes interactive
- **Memory Usage**: Peak memory consumption
- **Network Requests**: Number and size of API calls
- **User Engagement**: Scroll depth, time on page

### Tools
- **Lighthouse**: Performance auditing
- **Web Vitals**: Core web vitals monitoring
- **Bundle Analyzer**: Bundle size analysis
- **React DevTools**: Component performance profiling
