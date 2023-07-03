from django.contrib.auth import logout, get_user
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import RedirectView

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenViewBase
from django.http import HttpResponse  
from django.shortcuts import redirect
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from tutorial.quickstart.serializers import UserSerializer, GroupSerializer
import logging

class Saml2JwtView(LoginRequiredMixin, TokenViewBase, RedirectView):
   # url to redirect to (front end url)
   url = "http://localhost:4040"

   def get(self, request, *args, **kwargs):
    #    userID= request.session.session_key
    #    getsession = request.session.load()
    #    #backend = load_backend(backend_path)
    #    user = User.getUse .get_user(getsession.get('auth_user_id'))
       getUser = get_user(request)
       response = super().get(request, *args, **kwargs)
       url = "http://localhost:4040"
       logging.info(request)
       # Obtain JWT tokens for logged in user
       refresh = RefreshToken.for_user(getUser)
       # Set JWT cookies
       response = HttpResponse("Cookie sets.")
       response.set_cookie('access', str(refresh.access_token))
       response.set_cookie('refresh', str(refresh))
    #    response = HttpResponse(
    #        response, {"access": str(refresh.access_token), "refresh": str(refresh)}
    #        )
       # Logout from django (remove session)
       #logout(request)

       return redirect(url + "/?jwtToken=" + str(refresh.access_token))

class Saml2LogoutJwtView(RedirectView):
   # url to redirect to (front end url)
   url = "http://localhost:4040"

   def get(self, request, *args, **kwargs):
       return redirect("http://localhost:4040/")

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]