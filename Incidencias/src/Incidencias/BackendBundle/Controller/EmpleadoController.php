<?php

namespace Incidencias\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class EmpleadoController extends Controller {

    public function portadaAction() {
        $mongo = $this->get('my_mongo');
        $elementos = $mongo->getEmpleados();
        return $this->render('BackendBundle:Empleado:portada.html.twig', array('empleados' => $elementos));
    }

    public function getUpdateAction($id) {
        $mongo = $this->get('my_mongo');
        $departamentos = $mongo->getDepartamentos();
        return $this->render('BackendBundle:Empleado:edit.html.twig', array('empleado' => $mongo->getEmpleado($id),
                    'departamentos' => $departamentos));
    }

    public function updateAction($id) {
        $mongo = $this->get('my_mongo');
        $post = $this->getRequest()->request;
        $departamento = $mongo->getDepartamento($post->get('inDepartamento'));
        $nombre = $post->get('inNombre');
        $correo = $post->get('inCorreo');
        //Si es -1 se tratara de un nuevo empleado
        if ($id == -1) {
            $dni = $post->get('inDni');
            $mongo->insertEmpleado($dni, $nombre, $correo, $departamento);
        } else {
            $mongo->updateEmpleado($id, $nombre, $correo, $departamento);
        }

        return $this->portadaAction();
    }

    public function getCreateAction() {
        $mongo = $this->get('my_mongo');
        $departamentos = $mongo->getDepartamentos();
        return $this->render('BackendBundle:Empleado:edit.html.twig', array('departamentos' => $departamentos));
    }

    public function deleteAction($id) {
        $mongo = $this->get('my_mongo');
        $mongo->deleteEmpleado($id);
        return $this->portadaAction();
    }

}
