from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('poll_app/', include('poll_app.urls')),
    path('admin/', admin.site.urls),
]
