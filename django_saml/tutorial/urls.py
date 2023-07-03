"""tutorial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from tutorial.quickstart import views
from rest_framework import routers
import djangosaml2.views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    
    url(r'saml2/', include('djangosaml2.urls')),
    url(r'^admin/login/$', djangosaml2.views.LoginView.as_view()),
    url(r'^admin/logout/$', djangosaml2.views.LogoutInitView.as_view()),
    path("saml2/jwt/", views.Saml2JwtView.as_view()),
    path("saml2/logout-jwt/", views.Saml2LogoutJwtView.as_view()),
    # url(r'saml2/metadata', include('djangosaml2.urls')),
    path('admin/', admin.site.urls),    
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
