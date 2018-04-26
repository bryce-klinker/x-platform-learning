export function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

export async function flushPromisesAndUpdate(wrapper) {
  await flushPromises();
  wrapper.update();
}
