import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
} from 'vitest';
import { getUsers } from '../api';
import { type User, useSingleUserStore } from '@/entities/user';
import { createPinia, setActivePinia } from 'pinia';

vi.mock('../api/index', () => ({
  getUsers: vi.fn(),
}));

describe('test useUserStore', () => {
  let store: ReturnType<typeof useSingleUserStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useSingleUserStore();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should init with default state', () => {
    expect(store.users).toEqual([]);
    expect(store.error).toBeNull();
    expect(store.isLoading).toBe(false);
  });

  it('update users after successful fetch', async () => {
    const mockUsers: User[] = [{
      id: '123w',
      name: 'Dmitriy',
      lastName: 'Dyakov',
      contact: '@redrickshuhard',
      role: 'coach',
      rating: 6,
    }];

    let resolvePromise!: (value: typeof mockUsers) => void;

    const pendingPromise = new Promise<typeof mockUsers>(resolve => {
      resolvePromise = resolve;
    });

    vi.mocked(getUsers).mockReturnValue(pendingPromise);

    const fetchPromise = store.fetchUsers();

    expect(store.isLoading).toBe(true);
    expect(getUsers).toHaveBeenCalledTimes(1);

    resolvePromise(mockUsers);

    await fetchPromise;

    expect(store.error).toBeNull();
    expect(store.isLoading).toBe(false);
    expect(store.users).toEqual(mockUsers);
  });

  it('handle API error: sets error and resets loading', async () => {
    const mockError = new Error('Failed to fetch users');

    vi.mocked(getUsers).mockRejectedValue(mockError);

    await store.fetchUsers();

    expect(getUsers).toHaveBeenCalledTimes(1);
    expect(store.error).toBe('Failed to fetch users');
    expect(store.isLoading).toBe(false);
    expect(store.users).toEqual([]);
  });
});
