import loadable from '@loadable/component';

export const AsyncAppLayout = loadable(() => import('../../component/Layout'));

export const AsyncMovies = loadable(() => import('../../container/Movies/'));

export const AsyncInternalServer = loadable(() =>
    import('../../container/Exception/InternalServerContainer')
);
export const AsyncNotFound = loadable(() => import('../../container/Exception/NotFoundContainer'));
export const AsyncForbidden = loadable(() => import('../../container/Exception/ForbiddenContainer'));
