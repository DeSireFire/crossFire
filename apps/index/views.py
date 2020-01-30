from django.shortcuts import render
from django.views import View


class index(View):
    '''
    首页视图
    '''

    def get(self, request):
        return render(request, 'index.html')
