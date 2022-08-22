import Vue from 'vue'
import Router from 'vue-router'
import StudentInfo from '@/components/StudentInfo'
import StudentInsert from '@/components/StudentInsert'
import StudentEdit from '@/components/StudentEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'studentinfo',
      component: StudentInfo
    },
    {
      path: '/info',
      name: 'studentinfo',
      component: StudentInfo
    },
    {
      path: '/insert',
      name: 'studentinsert',
      component: StudentInsert
    },
    {
      path: '/edit/:id',
      name: 'studentedit',
      component: StudentEdit
    }
  ]
})
