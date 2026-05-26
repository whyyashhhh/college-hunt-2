"use client";

const compareKey = 'collegehunt-compare';
const shortlistKey = 'collegehunt-shortlist';
const userIdKey = 'collegehunt-user-id';

const safeStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
};

const readIds = (key: string) => {
  const storage = safeStorage();
  if (!storage) return [] as string[];

  try {
    const parsed = JSON.parse(storage.getItem(key) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : [];
  } catch {
    return [];
  }
};

const writeIds = (key: string, ids: string[]) => {
  const storage = safeStorage();
  if (!storage) return;

  storage.setItem(key, JSON.stringify(ids));
};

export const getCompareIds = () => readIds(compareKey);
export const setCompareIds = (ids: string[]) => writeIds(compareKey, Array.from(new Set(ids)).slice(0, 4));
export const addCompareId = (id: string) => {
  const next = getCompareIds().filter((item) => item !== id);
  next.unshift(id);
  setCompareIds(next.slice(0, 4));
};
export const removeCompareId = (id: string) => setCompareIds(getCompareIds().filter((item) => item !== id));

export const getShortlistIds = () => readIds(shortlistKey);
export const setShortlistIds = (ids: string[]) => writeIds(shortlistKey, Array.from(new Set(ids)));
export const addShortlistId = (id: string) => {
  const next = getShortlistIds();
  if (!next.includes(id)) {
    next.unshift(id);
    setShortlistIds(next);
  }
};
export const removeShortlistId = (id: string) => setShortlistIds(getShortlistIds().filter((item) => item !== id));

export const getOrCreateUserId = () => {
  const storage = safeStorage();
  if (!storage) return 'anonymous';

  const existing = storage.getItem(userIdKey);
  if (existing) return existing;

  const generated = `user_${Math.random().toString(36).slice(2, 11)}`;
  storage.setItem(userIdKey, generated);
  return generated;
};
