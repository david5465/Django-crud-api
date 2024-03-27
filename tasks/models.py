from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    cost_price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2)
    barcode = models.CharField(max_length=255, unique=True)
    available = models.BooleanField(default=True)
    supplier = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    tax = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)

    def __str__(self):
        return self.title
    
    