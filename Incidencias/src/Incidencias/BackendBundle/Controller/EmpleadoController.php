<?php

namespace Incidencias\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IncidenciaController extends Controller {

    public function portadaAction() {
        $mongo = $this->get('my_mongo');
        $elementos = $mongo->getIncidencias();
        return $this->render('BackendBundle:Default:portada.html.twig', array('incidencias' => $elementos));
    }

    public function showImageAction($id) {
        $mongo = $this->get('my_mongo');
        return $this->render('BackendBundle:Default:image.html.twig', array('imagen' => $mongo->getImagen($id)));
    }

    public function getUpdateAction($id) {
        $mongo = $this->get('my_mongo');
        return $this->render('BackendBundle:Default:edit.html.twig', array('incidencia' => $mongo->getIncidencia($id)));
    }

    public function updateAction($id) {
        $mongo = $this->get('my_mongo');
        $post=$this->getRequest()->request; 
        $image = $this->getRequest()->files->get('inImagen');
        $imagen=null;
        if (isset($image)) {
            $fileService = $this->get('my_files');
            $fileService->uploadImage($image);
            //La inserto en la BD
            $imagen = $mongo->insertImage($image->getClientOriginalName());
        }
        $estado=$mongo->getEstadoByNombre($post->get('optionsRadios'));
        $mongo->updateIncidencia($id,$post->get('inDescripcion'),$post->get('inAsunto'),$post->get('inSolucion'),$estado,$imagen);
       
        
        return $this->portadaAction();
    }

}
