import { AsyncIterableX } from '../asynciterablex';
import { flatMap } from './flatmap';

/**
 * Merges elements from all inner async-iterable sequences into a single async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequences.
 * @returns {OperatorAsyncFunction<AsyncIterable<TSource>, TSource>} The async-iterable sequence that merges the elements of the inner sequences.
 */
export function mergeAll() {
  return function mergeAllOperatorFunction<TSource>(source: AsyncIterable<AsyncIterable<TSource>>) {
    return AsyncIterableX.as(source)['pipe'](flatMap((s) => s));
  };
}
