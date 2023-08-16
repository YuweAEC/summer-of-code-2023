# Generated by Django 4.2.2 on 2023-07-05 15:19

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('e_commerce', '0002_product_buyers_product_creator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='buyers',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.PositiveIntegerField(), size=None),
        ),
    ]
