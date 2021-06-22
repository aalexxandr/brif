import React from 'react'
// import ClosedRequests from '../components/ClosedRequests/ClosedRequestsContainer'

const AdminsList = React.lazy( () => import ( '../components/AdminsList/AdminsListContainer') )
const DeletedRequests = React.lazy( () => import ( '../components/DeletedRequests/DeteledRequestsContainer') )
const ClosedRequests = React.lazy( () => import ( '../components/ClosedRequests/ClosedRequestsContainer') )
const OpenedRequests = React.lazy( () => import ( '../components/OpenedRequests/OpenedRequestsContainer') )
const SendRequest = React.lazy( () => import ( '../components/SendRequest/SendRequest') )


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