from django.db import models
from django import forms



class User(models.Model):
    '''用户表'''

    gender = (
        ('QQ', "QQ"),
        ('wechat', "微信"),
    )

    name = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    contect = models.CharField(unique=True,max_length=128)
    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['c_time']
        verbose_name = '用户'
        verbose_name_plural = '用户'

# # 用户注册
# class RegisterForm(forms.Form):
#     gender = (
#         ('QQ', "QQ"),
#         ('wechat', "微信"),
#     )
#     username = forms.CharField(label="用户名", max_length=128, widget=forms.TextInput(attrs={'class': 'form-control'}))
#     password1 = forms.CharField(label="密码", max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control'}))
#     password2 = forms.CharField(label="确认密码", max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control'}))
#     email = forms.EmailField(label="邮箱地址", widget=forms.EmailInput(attrs={'class': 'form-control'}))
#     contect = forms.ChoiceField(label='联系方式', choices=gender)
#     contectD = forms.CharField(label="联系方式账号", widget=forms.TextInput(attrs={'class': 'form-control'}))
#     invitation =  forms.CharField(label="邀请码", widget=forms.TextInput(attrs={'class': 'form-control'}))
#
#     def __str__(self):
#         return self.name
#
#     class Meta:
#         ordering = ['c_time']
#         verbose_name = '用户'
#         verbose_name_plural = '用户'