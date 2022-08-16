import { Path } from 'enums'
import { Profile } from 'pages'
import { lazy } from 'react'

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
	.then(module => ({ default: module.NotFound })))

export const ROUTES = [
	{ path: Path.NOT_FOUND, element: <NotFound /> },
]
