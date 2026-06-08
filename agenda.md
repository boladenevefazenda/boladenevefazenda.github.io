---
layout: default
title: Agenda
---

# Agenda

{% if site.data.eventos.size > 0 %}

{% for evento in site.data.eventos %}

<div class="card">

    <h3>{{ evento.titulo }}</h3>

    <div class="evento-info">
        <div>📅 {{ evento.data }}</div>
        <div>🕒 {{ evento.horario }}</div>
        <div>📍 {{ evento.local }}</div>
    </div>

    <p>{{ evento.descricao }}</p>

</div>

{% endfor %}

{% else %}

<div class="card">
    <p>Nenhum evento programado no momento.</p>
</div>

{% endif %}