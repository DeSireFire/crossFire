from django.shortcuts import render, HttpResponse
from django.views import View
from .models import User
# Create your views here.



class login(View):
    '''
    登陆视图
    '''

    def post(self, request):
        loginData = self.request.POST
        if 'email' in loginData and 'password' in loginData:
            email = loginData.get('email')
            password = loginData.get('password')

            # 查询用户邮箱
            uEmail = User.objects.filter(pub_date__year=2006)


class register(View):
    '''
    登陆视图
    '''

    def post(self, request):
        loginData = self.request.POST
        if 'email' in loginData and 'password' in loginData:
            email = loginData.get('email')
            password = loginData.get('password')

            # 查询用户邮箱
            uEmail = User.objects.filter(pub_date__year=2006)
