# Generated by Django 3.0.7 on 2021-07-19 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0008_auto_20210719_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='show',
            field=models.BooleanField(default=False),
        ),
    ]
