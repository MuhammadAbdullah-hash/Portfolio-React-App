# Generated by Django 3.0.7 on 2021-07-19 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0006_projects'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Projects',
            new_name='Project',
        ),
        migrations.RenameModel(
            old_name='Skills',
            new_name='Skill',
        ),
    ]
