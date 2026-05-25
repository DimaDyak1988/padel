import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useRouteParam(key: string) {
  const route = useRoute();

  return computed(() => {
    const value = route.params[key];
    return typeof value === 'string' ? value : undefined;
  });
}
