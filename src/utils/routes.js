import { lazy } from 'react'
import SendRequest from '../components/SendRequest/SendRequest'

const AdminsList = lazy( () => import ( '../components/AdminsList/AdminsListContainer') )
const DeletedRequests = lazy( () => import ( '../components/DeletedRequests/DeteledRequestsContainer') )
const ClosedRequests = lazy( () => import ( '../components/ClosedRequests/ClosedRequestsContainer') )
const OpenedRequests = lazy( () => import ( '../components/OpenedRequests/OpenedRequestsContainer') )


export const routes = [
  {
    name: 'Главная',
    path : '/',
    Component : SendRequest,
    private: false
  },
  {
    name: 'Активные заявки',
    path : '/open_requests',
    Component : OpenedRequests,
    private: true
  },
  {
    name : 'Закрытые заявки',
    path : '/closed_requests',
    Component : ClosedRequests,
    private: true
  },
  {
    name : 'Корзина',
    path : '/deleted_requests',
    Component : DeletedRequests,
    private: true
  },
  {
    name : 'Администраторы',
    path : '/admins',
    Component : AdminsList,
    private: true
  }
]