<?php

namespace Incidencias\IncidenciaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('IncidenciasIncidenciaBundle:Default:index.html.twig', array('name' => $name));
    }
    public function inicializarAction(){
        
    }
}
