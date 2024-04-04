from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializer import ProductSerializer
from .models import Product
from django.db.models import Q
# Create your views here.

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'barcode'] 

    #def get_queryset(self):
     #   queryset = super().get_queryset()
      #  search_term = self.request.query_params.get('search', '')
       # if search_term:
        #    queryset = queryset.filter(Q(title__icontains=search_term) | Q(barcode=search_term))
        #return queryset