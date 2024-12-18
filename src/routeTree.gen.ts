/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VoteImport } from './routes/vote'
import { Route as StatisticImport } from './routes/statistic'
import { Route as ProfileImport } from './routes/profile'
import { Route as CandidateImport } from './routes/candidate'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const VoteRoute = VoteImport.update({
  id: '/vote',
  path: '/vote',
  getParentRoute: () => rootRoute,
} as any)

const StatisticRoute = StatisticImport.update({
  id: '/statistic',
  path: '/statistic',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const CandidateRoute = CandidateImport.update({
  id: '/candidate',
  path: '/candidate',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/candidate': {
      id: '/candidate'
      path: '/candidate'
      fullPath: '/candidate'
      preLoaderRoute: typeof CandidateImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/statistic': {
      id: '/statistic'
      path: '/statistic'
      fullPath: '/statistic'
      preLoaderRoute: typeof StatisticImport
      parentRoute: typeof rootRoute
    }
    '/vote': {
      id: '/vote'
      path: '/vote'
      fullPath: '/vote'
      preLoaderRoute: typeof VoteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/candidate': typeof CandidateRoute
  '/profile': typeof ProfileRoute
  '/statistic': typeof StatisticRoute
  '/vote': typeof VoteRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/candidate': typeof CandidateRoute
  '/profile': typeof ProfileRoute
  '/statistic': typeof StatisticRoute
  '/vote': typeof VoteRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/candidate': typeof CandidateRoute
  '/profile': typeof ProfileRoute
  '/statistic': typeof StatisticRoute
  '/vote': typeof VoteRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/candidate' | '/profile' | '/statistic' | '/vote' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/candidate' | '/profile' | '/statistic' | '/vote' | '/login'
  id:
    | '__root__'
    | '/'
    | '/candidate'
    | '/profile'
    | '/statistic'
    | '/vote'
    | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CandidateRoute: typeof CandidateRoute
  ProfileRoute: typeof ProfileRoute
  StatisticRoute: typeof StatisticRoute
  VoteRoute: typeof VoteRoute
  LoginLazyRoute: typeof LoginLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CandidateRoute: CandidateRoute,
  ProfileRoute: ProfileRoute,
  StatisticRoute: StatisticRoute,
  VoteRoute: VoteRoute,
  LoginLazyRoute: LoginLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/candidate",
        "/profile",
        "/statistic",
        "/vote",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/candidate": {
      "filePath": "candidate.jsx"
    },
    "/profile": {
      "filePath": "profile.jsx"
    },
    "/statistic": {
      "filePath": "statistic.jsx"
    },
    "/vote": {
      "filePath": "vote.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
